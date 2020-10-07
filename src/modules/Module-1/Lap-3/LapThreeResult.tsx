import React, { useEffect } from 'react';
import Result from '../../../components/result/result';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../utils/data';
import { setLapResult } from '../../../redux/actions/moduleOneActions';

const LapTwoResult: React.FC = () => {
  const choice = useSelector(
    (state: ReduxStore) => state.moduleOne.lapThree.choice,
  );
  let quality = '';
  if (choice !== null) {
    quality = moduleOneResultData.lapThree(choice);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const LapThreeResult = {
      lapNumber: '3',
      title: 'Setting the context',
      description: 'Your decision shows these qualities',
      qualities: [quality],
    };
    dispatch(setLapResult(LapThreeResult));
  }, [dispatch, quality]);

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
