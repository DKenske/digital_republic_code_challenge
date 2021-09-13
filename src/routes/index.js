import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Navigation from '../components/navigation/index';

const Routes = () => {
  return (
    <Switch>
      <Navigation>
        <Route path="/" component={Home} />
      </Navigation>
    </Switch>
  );
};

export default Routes;
