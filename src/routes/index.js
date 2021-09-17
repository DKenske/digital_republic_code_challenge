import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Navigation from '../components/navigation/index';
import { Calculator } from '../pages/calculator';
import Contact from '../pages/contact';

const Routes = () => {
  return (
    <Switch>
      <Navigation>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/contact" component={Contact} />
      </Navigation>
    </Switch>
  );
};

export default Routes;
