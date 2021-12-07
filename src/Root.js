import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from 'views/Home/Home';
import Shop from 'views/Shop/Shop';
import Product from 'views/Product/Product';
import CartAndForm from 'views/CartAndForm/CartAndForm';
import Provider from 'hoc/Provider';

const Root = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  return (
    <Provider cart={cart} setCart={setCart}>
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
    </Provider>
  );
};

export default Root;
