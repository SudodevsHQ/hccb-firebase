import React from 'react';
import { useRouteMatch, BrowserRouter as Router } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { IntroductionOne, ModuleIntroVideo } from './Home';
import { LapOneA, LapOneB, LapOneC, LapOneD, LapOneResult } from './Lap-1';
import { LapTwo, LapTwoResult } from './Lap-2';
import { LapThree, LapThreeResult } from './Lap-3';
import { LapFour, LapFourSubjectiveResponse } from './Lap-4';
import LapFourResult from './Lap-4/LapFourResult';

import LapFive from './Lap-5/LapFive';
import {
  LapSixIntro,
  LapSixPartA,
  LapSixResultA,
  LapSixPartB,
  LapSixResultB,
} from './Lap-6';
import { ModuleOneConclusion, ModuleOneResults } from './ModuleOneConclusion';
import Loading from '../../components/Loading/Loading';
import useCheckAuth from '../../hooks/useCheckAuth';
import ServerError from '../../components/ServerError/ServerError';
import TopBar from '../../components/TopBar/TopBar';

const ModuleOne: React.FC = () => {
  const { url } = useRouteMatch();

  const { isValid, isLoading } = useCheckAuth();
  if (isLoading) return <Loading />;
  if (!isValid) return <ServerError />;

  return (
    <Router>
      <TopBar />

      <AnimatedSwitch>
        <AnimatedRoute
          path={`${url}/`}
          component={ModuleIntroVideo}
          exact={true}
        />
        <AnimatedRoute
          path={`${url}/introduction`}
          component={IntroductionOne}
          exact
        />
        <AnimatedRoute path={`${url}/lap/1/a`} component={LapOneA} />
        <AnimatedRoute path={`${url}/lap/1/b`} component={LapOneB} />
        <AnimatedRoute path={`${url}/lap/1/c`} component={LapOneC} />
        <AnimatedRoute path={`${url}/lap/1/d`} component={LapOneD} />
        <AnimatedRoute path={`${url}/lap/1/result`} component={LapOneResult} />

        <AnimatedRoute path={`${url}/lap/2`} component={LapTwo} exact={true} />
        <AnimatedRoute path={`${url}/lap/2/result`} component={LapTwoResult} />

        <AnimatedRoute
          path={`${url}/lap/3`}
          component={LapThree}
          exact={true}
        />
        <AnimatedRoute
          path={`${url}/lap/3/result`}
          component={LapThreeResult}
        />

        <AnimatedRoute path={`${url}/lap/4`} component={LapFour} exact={true} />
        <AnimatedRoute
          path={`${url}/lap/4/why`}
          component={LapFourSubjectiveResponse}
        />

        <AnimatedRoute path={`${url}/lap/4/result`} component={LapFourResult} />
        <AnimatedRoute path={`${url}/lap/5`} component={LapFive} exact={true} />
        <AnimatedRoute
          path={`${url}/lap/6`}
          component={LapSixIntro}
          exact={true}
        />
        <AnimatedRoute
          path={`${url}/lap/6/partA`}
          component={LapSixPartA}
          exact
        />
        <AnimatedRoute
          path={`${url}/lap/6/partA/result`}
          component={LapSixResultA}
        />
        <AnimatedRoute
          path={`${url}/lap/6/partB`}
          component={LapSixPartB}
          exact
        />
        <AnimatedRoute
          path={`${url}/lap/6/partB/result`}
          component={LapSixResultB}
        />
        <AnimatedRoute
          path={`${url}/conclusion`}
          component={ModuleOneConclusion}
          exact
        />
        <AnimatedRoute
          path={`${url}/conclusion/result`}
          component={ModuleOneResults}
          exact
        />
      </AnimatedSwitch>
    </Router>
  );
};

export default ModuleOne;
