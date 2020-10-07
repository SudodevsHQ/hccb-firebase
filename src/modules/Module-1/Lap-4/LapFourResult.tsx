import React, { useEffect } from 'react';
import Result from '../../../components/result/result';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../utils/data';
import { setLapResult } from '../../../redux/actions/moduleOneActions';

const LapFourResult: React.FC = () => {
  const choices = useSelector(
    (state: ReduxStore) => state.moduleOne.lapTwo.choices,
  );

  let qualities = [''];
  if (choices !== null) {
    qualities = moduleOneResultData.lapFour(choices.sort());
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const LapFourResult = {
      lapNumber: '4',
      title: 'Leadership Style',
      description: 'Your Ideal Leadership Style as per Manpower Traits is ',
      qualities,
    };
    dispatch(setLapResult(LapFourResult));
  }, [dispatch, qualities]);
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
