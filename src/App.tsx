import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { pageTransitions } from './util/rrtConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './modules/Module-1/Home/IntroductionOne';
import LapOneA from './modules/Module-1/Lap-1/LapOneA';
import LapOneB from './modules/Module-1/Lap-1/LapOneB';
import LapOneC from './modules/Module-1/Lap-1/LapOneC';
import LapOneD from './modules/Module-1/Lap-1/LapOneD';
import LapOneResult from './modules/Module-1/Lap-1/LapOneResult';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AnimatedSwitch
        {...pageTransitions}
        mapStyles={(styles: any) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
        className="switch-wrapper">
        <AnimatedRoute path="/" component={Home} exact={true} />
        <AnimatedRoute path="/module/1/introduction" component={Home} />
        <AnimatedRoute path="/module/1/lap/1a" component={LapOneA} />
        <AnimatedRoute path="/module/1/lap/1b" component={LapOneB} />
        <AnimatedRoute path="/module/1/lap/1c" component={LapOneC} />
        <AnimatedRoute path="/module/1/lap/1d" component={LapOneD} />
        <AnimatedRoute path="/module/1/result" component={LapOneResult} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
};

export default App;
