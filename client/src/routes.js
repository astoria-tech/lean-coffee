import React from 'react';
import { Switch, Route } from 'react-router';
import CardsIndex from './components/cards/CardsIndex';

const routes = (
  <div>
    <Switch>
      <Route path='/' component={CardsIndex} />
    </Switch>
  </div>
)

export default routes;
