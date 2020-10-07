import React, { useEffect } from 'react';
import Result from '../../../components/result/result';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../utils/data';
import { setLapResult } from '../../../redux/actions/moduleOneActions';

const LapSixResultA: React.FC = () => {
  const choice = useSelector(
    (state: ReduxStore) => state.moduleOne.lapSix.choiceA,
  );
  let result = '';
  let isCorrect = false;

  if (choice !== null) {
    [result, isCorrect] = moduleOneResultData.lapSix('A', choice);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const LapFourResult = {
      lapNumber: '6a',
      title: 'Negotiation',
      suggestions: !isCorrect ? [result] : undefined,
      qualities: isCorrect ? [result] : undefined,
    };
    dispatch(setLapResult(LapFourResult));
  }, [dispatch, isCorrect, result]);

  return (
    <Result
      title="Negotiation"
      lapNumber={6}
      suggestions={!isCorrect ? [result] : undefined}
      qualities={isCorrect ? [result] : undefined}
      nextPath="/module/1/lap/6/partB"
      image="completed"
    />
  );
};

export default LapSixResultA;
