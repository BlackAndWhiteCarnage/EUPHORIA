import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// VIEWS
import Home from 'views/Home/Home';
import Shop from 'views/Shop/Shop';
import Product from 'views/Product/Product';
import CartAndForm from 'views/CartAndForm/CartAndForm';
// HOC
import Provider from 'hoc/Provider';

const Root = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Provider cart={cart} setCart={setCart}>
        <Switch>
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
      </Provider>
    </BrowserRouter>
  );
};

export default Root;
