import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Navigation from '../components/navigation/index';
import { Calculator } from '../pages/calculator';

const Routes = () => {
  return (
    <Switch>
      <Navigation>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
      </Navigation>
    </Switch>
  );
};

export default Routes;
