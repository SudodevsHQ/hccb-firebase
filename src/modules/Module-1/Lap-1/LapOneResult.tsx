import React from 'react';
import Result from '../../../components/result/result';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../interfaces/reduxStore';
import { moduleOneResultData } from '../data';

const LapOneResult: React.FC = () => {
  const savings = useSelector(
    (state: ReduxStore) => state.moduleOne.lapOne.amount,
  );

  return (
    <Result
      lapNumber={1}
      title={'Budget Management'}
      qualities={moduleOneResultData.lapOne(savings)}
      remark="You saved ₹6000"
      nextPath="/module/1/lap/2"
    />
  );
};

export default LapOneResult;
