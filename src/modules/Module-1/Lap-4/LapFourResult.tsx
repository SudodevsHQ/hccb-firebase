import React from 'react';
import Result from '../../../components/result/result';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../utils/data';

const LapFourResult: React.FC = () => {
  const choices = useSelector(
    (state: ReduxStore) => state.moduleOne.lapTwo.choices,
  );

  let qualities = [''];
  if (choices !== null) {
    qualities = moduleOneResultData.lapFour(choices.sort());
  }
  return (
    <Result
      title="Leadership Style"
      description="Your Ideal Leadership Style as per Manpower Traits is "
      lapNumber={4}
      qualities={qualities}
      nextPath="/module/1/lap/5"
    />
  );
};

export default LapFourResult;
