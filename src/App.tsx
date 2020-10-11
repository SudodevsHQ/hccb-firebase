import React from 'react';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { pageTransitions } from './util/rrtConfig';

import TopBar from './components/TopBar/TopBar';
import useCheckAuth from './hooks/useCheckAuth';
import { RouteComponentProps } from 'react-router-dom';
import ModuleOne from './modules/Module-1/ModuleOne';
import Loading from './components/Loading/Loading';
import ServerError from './components/ServerError/ServerError';

const App: React.FunctionComponent = () => {
  const { isValid, email, quizID, isLoading } = useCheckAuth();

  if (isLoading) return <Loading />;
  if (!isValid) return <ServerError />;

  return (
    <>
      <TopBar />
      <AnimatedSwitch
        {...pageTransitions}
        //eslint-disable-next-line
        mapStyles={(styles: any) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
        className="switch-wrapper">
        <AnimatedRoute
          path={`/quiz/${quizID}/${email}`}
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
