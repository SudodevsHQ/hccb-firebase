import React, { useEffect } from 'react';
import Result from '../../../components/result/result';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../utils/data';
import { setLapResult } from '../../../redux/actions/moduleOneActions';

const LapSixResultB: React.FC = () => {
  const choice = useSelector(
    (state: ReduxStore) => state.moduleOne.lapSix.choiceB,
  );
  let result = '';
  let isCorrect = false;

  if (choice !== null) {
    [result, isCorrect] = moduleOneResultData.lapSix('B', choice);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const LapFourResult = {
      lapNumber: '6b',
      title: 'Negotiation - Part 2',
      suggestions: !isCorrect ? [result] : undefined,
      qualities: isCorrect ? [result] : undefined,
    };
    dispatch(setLapResult(LapFourResult));
  }, [dispatch, isCorrect, result]);

  return (
    <Result
      title="Negotiation - Part 2"
      lapNumber={6}
      suggestions={!isCorrect ? [result] : undefined}
      qualities={isCorrect ? [result] : undefined}
      nextPath="/module/1/conclusion"
      image="completed"
    />
  );
};

export default LapSixResultB;
