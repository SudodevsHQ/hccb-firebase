import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './modules/Module-1/Home/IntroductionOne';
import LapOneA from './modules/Module-1/Lap-1/LapOneA';
import LapOneB from './modules/Module-1/Lap-1/LapOneB';
import LapOneC from './modules/Module-1/Lap-1/LapOneC';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/module/1/introduction" component={Home} />
        <Route path="/module/1/lap/1a" component={LapOneA} />
        <Route path="/module/1/lap/1b" component={LapOneB} />
        <Route path="/module/1/lap/1c" component={LapOneC} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
