import React from 'react';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { pageTransitions } from './util/rrtConfig';

import { RouteComponentProps, useLocation } from 'react-router-dom';
import ModuleOne from './modules/Module-1/ModuleOne';
import LoginPage from './Login';

const App: React.FunctionComponent = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  const employee_id = path[3];
  const quizID = path[2];
  return (
    <>
      <AnimatedSwitch
        {...pageTransitions}
        //eslint-disable-next-line
        mapStyles={(styles: any) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
        className="switch-wrapper">
        <AnimatedRoute
          path={`/quiz/${quizID}`}
          component={LoginPage}
          exact={true}
        />

        <AnimatedRoute
          path={`/quiz/${quizID}/${employee_id}`}
          render={({ match: { path } }: RouteComponentProps) => (
            <>
              <AnimatedRoute path={`${path}/module/1`} component={ModuleOne} />
            </>
          )}
        />
      </AnimatedSwitch>
    </>
  );
};

export default App;
