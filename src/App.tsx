import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { pageTransitions } from './util/rrtConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {
  IntroductionOne,
  ModuleIntroVideo,
} from './modules/Module-1/Home/index';
import {
  LapOneA,
  LapOneB,
  LapOneC,
  LapOneD,
  LapOneResult,
} from './modules/Module-1/Lap-1/index';
import { LapTwo, LapTwoResult } from './modules/Module-1/Lap-2/index';
import { LapThree, LapThreeResult } from './modules/Module-1/Lap-3/index';
import {
  LapFour,
  LapFourSubjectiveResponse,
} from './modules/Module-1/Lap-4//index';
import LapFive from './modules/Module-1/Lap-5/LapFive';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AnimatedSwitch
        {...pageTransitions}
        //eslint-disable-next-line
        mapStyles={(styles: any) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
        className="switch-wrapper">
        <AnimatedRoute path="/" component={ModuleIntroVideo} exact={true} />

        <AnimatedRoute
          path="/module/1/introduction"
          component={IntroductionOne}
        />
        <AnimatedRoute path="/module/1/lap/1/a" component={LapOneA} />
        <AnimatedRoute path="/module/1/lap/1/b" component={LapOneB} />
        <AnimatedRoute path="/module/1/lap/1/c" component={LapOneC} />
        <AnimatedRoute path="/module/1/lap/1/d" component={LapOneD} />
        <AnimatedRoute path="/module/1/lap/1/result" component={LapOneResult} />

        <AnimatedRoute path="/module/1/lap/2" component={LapTwo} exact={true} />
        <AnimatedRoute path="/module/1/lap/2/result" component={LapTwoResult} />

        <AnimatedRoute
          path="/module/1/lap/3"
          component={LapThree}
          exact={true}
        />
        <AnimatedRoute
          path="/module/1/lap/3/result"
          component={LapThreeResult}
        />

        <AnimatedRoute
          path="/module/1/lap/4"
          component={LapFour}
          exact={true}
        />
        <AnimatedRoute
          path="/module/1/lap/4/why"
          component={LapFourSubjectiveResponse}
        />

        <AnimatedRoute
          path="/module/1/lap/5"
          component={LapFive}
          exact={true}
        />
      </AnimatedSwitch>
    </BrowserRouter>
  );
};

export default App;
