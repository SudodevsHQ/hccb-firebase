import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Conclusion from '../../../components/Conclusion/Conclusion';
import { ReduxStore } from '../../../interfaces/reduxStore';

const ModuleOneConclusion: React.FC = () => {
  const moduleResultData = useSelector(
    (state: ReduxStore) => state.moduleOne.moduleResult,
  );
  const { url } = useRouteMatch();

  useEffect(() => {
    const commitResult = async () => {
      const id = url.split('/')[2];
      const employee_id = url.split('/')[3];
      await fetch(`${process.env.REACT_APP_BASE_URL}/quiz/add-data`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: moduleResultData.map((lapResult) => ({
            ...lapResult,
            key: `quiz/${id}`,
            employee_id,
          })),
        }),
      });
      // const json = await res.json();
      // // console.log(json);
    };

    commitResult();
  }, [moduleResultData, url]);

  return (
    <Conclusion
      title="Good Job!"
      description="Well Done we are done with the module 1, you have well managed the finances and team selection.
       All the best for the execution with all the inputs received in the Laps 🙂 "
      nextPath="/module/1/conclusion/result"
      downloadUrl="/module/1/conclusion/result"
    />
  );
};

export default ModuleOneConclusion;
