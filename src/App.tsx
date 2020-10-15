import React, { useEffect, useState } from 'react';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { pageTransitions } from './util/rrtConfig';

import { RouteComponentProps, useLocation } from 'react-router-dom';
import ModuleOne from './modules/Module-1/ModuleOne';
import LoginPage from './Login';
import Attempted from './components/Attempted/Attempted';

const App: React.FunctionComponent = () => {
  const [attempted, setAttempted] = useState(false);
  const location = useLocation();
  const path = location.pathname.split('/');
  const employee_id = path[3];
  const quizID = path[2];

  useEffect(() => {
    const checkIfAttempted = async () => {
      const resp = await fetch(
        `${process.env.REACT_APP_BASE_URL}/quiz/responses?employee_id=${employee_id}&key=quiz/${quizID}`,
        {
          method: 'GET',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await resp.json();
      setAttempted(json.data.length > 0);
    };
    checkIfAttempted();
  }, [employee_id, quizID]);

  if (attempted) return <Attempted />;

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
