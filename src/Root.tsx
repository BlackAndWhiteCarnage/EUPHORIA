import { ReactElement, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from 'views/Home/Home';
import Shop from 'views/Shop/Shop';
import Product from 'views/Product/Product';
import CartAndForm from 'views/CartAndForm/CartAndForm';
import MainProvider from 'providers/MainProvider/MainProvider';

export interface CartType {
  cart: {
    extrasNumber: number
    id: string
    images: {
      url: string
    }[]
    initialPrice: number
    name: string
    pickedExtras: string[] | []
    price: number
  }[] | []
  setCart: React.Dispatch<React.SetStateAction<CartType['cart']>>
}

const Root = (): ReactElement => {
  const [cart, setCart] = useState<CartType['cart']>([]);
  const location = useLocation();

  return (
    <MainProvider cart={cart} setCart={setCart}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/koszyk' exact>
            <CartAndForm cart={cart} setCart={setCart} />
          </Route>
          <Route path='/sklepik/:id' exact>
            <Shop cart={cart} />
          </Route>
          <Route path='/:id' exact>
            <Product cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </AnimatePresence>
    </MainProvider>
  );
};

export default Root;
