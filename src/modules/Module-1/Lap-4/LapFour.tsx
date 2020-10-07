import React, { useEffect, useState } from 'react';
import MCQ from '../../../components/MCQ/MCQ';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { useSelector } from 'react-redux';

const LapFour: React.FC = () => {
  const [nextPath, setNextPath] = useState('');
  const choice = useSelector(
    (state: ReduxStore) => state.moduleOne.lapFour.choice,
  );

  useEffect(() => {
    if (choice === 0) {
      console.log(choice);
      setNextPath('/module/1/lap/4/why');
    } else {
      setNextPath('/module/1/lap/4/result');
    }
  }, [setNextPath, choice]);

  return (
    <MCQ
      title="What kind of style would you like to adapt?"
      description="With the chosen Manpower in Lap 2, what kind of leadership style would you like to adapt more?"
      lapNumber={4}
      image="man"
      nextPath={nextPath}
      options={[
        'Participating and Supporting',
        'Selling and Coaching',
        'Delegating to the employees',
        'Telling and Directing',
      ]}
      optionsPerRow={2}
      stateSelector={(state) => state.moduleOne.lapFour.choice}></MCQ>
  );
};

export default LapFour;
