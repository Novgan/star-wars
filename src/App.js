import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import CardContainer from './components/Card/CardContainer';
import NotFoundComponent from './components/Common/NotFound/NotFound';
import PlanetContainer from './components/Planet/PlanetContainer';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/planet/:id" exact={true} render={() => <PlanetContainer />} />
        <Route path="/:page?" exact={true} render={() => <CardContainer />} />
        <Route render={() => <NotFoundComponent />} />
      </Switch>
    </>
  );
}

export default App;
