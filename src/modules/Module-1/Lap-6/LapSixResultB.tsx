import React from 'react';
import Result from '../../../components/result/result';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../data';

const LapSixResultB: React.FC = () => {
  const choice = useSelector(
    (state: ReduxStore) => state.moduleOne.lapSix.choiceB,
  );
  let result = '';
  let isCorrect = false;

  if (choice !== null) {
    [result, isCorrect] = moduleOneResultData.lapSix('B', choice);
  }

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
