import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './modules/Module-1/Home/IntroductionOne';
import LapOneA from './modules/Module-1/Lap-1A/LapOneA';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/module/1/introduction" component={Home} />
        <Route path="/module/1/lap/1a" component={LapOneA} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
