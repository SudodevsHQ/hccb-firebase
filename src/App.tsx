import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { pageTransitions } from './util/rrtConfig';
import { ModuleIntroVideo, IntroductionOne } from './modules/Module-1/Home';
import {
  LapOneA,
  LapOneB,
  LapOneC,
  LapOneD,
  LapOneResult,
} from './modules/Module-1/Lap-1';
import { LapTwo, LapTwoResult } from './modules/Module-1/Lap-2';
import { LapThree, LapThreeResult } from './modules/Module-1/Lap-3';
import { LapFour, LapFourSubjectiveResponse } from './modules/Module-1/Lap-4';
import LapFourResult from './modules/Module-1/Lap-4/LapFourResult';
import LapFive from './modules/Module-1/Lap-5/LapFive';
import {
  LapSixIntro,
  LapSixPartA,
  LapSixResultA,
  LapSixPartB,
  LapSixResultB,
} from './modules/Module-1/Lap-6';
import {
  ModuleOneConclusion,
  ModuleOneResults,
} from './modules/Module-1/ModuleOneConclusion';
import TopBar from './components/TopBar/TopBar';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <TopBar />
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
          path="/module/1/lap/4/result"
          component={LapFourResult}
        />
        <AnimatedRoute
          path="/module/1/lap/5"
          component={LapFive}
          exact={true}
        />
        <AnimatedRoute
          path="/module/1/lap/6"
          component={LapSixIntro}
          exact={true}
        />
        <AnimatedRoute
          path="/module/1/lap/6/partA"
          component={LapSixPartA}
          exact
        />
        <AnimatedRoute
          path="/module/1/lap/6/partA/result"
          component={LapSixResultA}
        />
        <AnimatedRoute
          path="/module/1/lap/6/partB"
          component={LapSixPartB}
          exact
        />
        <AnimatedRoute
          path="/module/1/lap/6/partB/result"
          component={LapSixResultB}
        />
        <AnimatedRoute
          path="/module/1/conclusion"
          component={ModuleOneConclusion}
          exact
        />
        <AnimatedRoute
          path="/module/1/conclusion/result"
          component={ModuleOneResults}
          exact
        />
      </AnimatedSwitch>
    </BrowserRouter>
  );
};

export default App;
