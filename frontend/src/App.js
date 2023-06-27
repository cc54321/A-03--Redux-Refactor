import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CartPage from './components/CartPage';
import SignInPage from './components/pages/SignInPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
};

export default App;



























