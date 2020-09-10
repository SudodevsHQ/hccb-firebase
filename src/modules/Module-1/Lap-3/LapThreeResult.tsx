import React from 'react';
import Result from '../../../components/result/result';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../data';

const LapTwoResult: React.FC = () => {
  const choice = useSelector(
    (state: ReduxStore) => state.moduleOne.lapThree.choice,
  );
  let quality = '';
  if (choice !== null) {
    quality = moduleOneResultData.lapThree(choice);
  }

  return (
    <Result
      title="Setting the context"
      lapNumber={3}
      description="Your decision shows these qualities"
      qualities={[quality]}
      nextPath="/module/1/lap/4"
    />
  );
};

export default LapTwoResult;
