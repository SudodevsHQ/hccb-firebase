import React, { useEffect } from 'react';
import Result from '../../../components/result/result';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { useDispatch, useSelector } from 'react-redux';
import { moduleOneResultData } from '../utils/data';
import { setLapResult } from '../../../redux/actions/moduleOneActions';
import moduleOneFeedback from '../utils/moduleOneFeedBack';

const LapTwoResult: React.FC = () => {
  const choices = useSelector(
    (state: ReduxStore) => state.moduleOne.lapTwo.choices,
  );

  let qualities = [''];
  let feedback = '';
  if (choices !== null) {
    qualities = moduleOneResultData.lapTwo(choices.sort());
    feedback = moduleOneFeedback.lapTwo(choices.sort());
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const LapTwoResult = {
      lapNumber: '2',
      title: 'Manpower Management',
      description: 'Your decision shows these qualities',
      qualities,
      feedback,
    };
    dispatch(setLapResult(LapTwoResult));
  }, [dispatch, qualities, feedback]);

  return (
    <Result
      title="Manpower Management"
      description="Your decision shows these qualities"
      lapNumber={2}
      qualities={qualities}
      nextPath="/module/1/lap/3"
    />
  );
};

export default LapTwoResult;
