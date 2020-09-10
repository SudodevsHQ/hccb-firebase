import React from 'react';
import Result from '../../../components/result/result';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../data';

const LapSixResultA: React.FC = () => {
  const choice = useSelector(
    (state: ReduxStore) => state.moduleOne.lapSix.choiceA,
  );
  let result = '';
  let isCorrect = false;

  if (choice !== null) {
    [result, isCorrect] = moduleOneResultData.lapSix('A', choice);
  }

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
