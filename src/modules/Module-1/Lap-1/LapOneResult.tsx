import React from 'react';
import Result from '../../../components/result/result';

const LapOneResult: React.FC = () => {
  return (
    <Result
      lapNumber={1}
      title={'Budget Management'}
      description="Some Nice Description"
      qualities={['Accountable and Responsible']}
      remark="You saved ₹6000"
      nextPath="/module/1/lap/2"
    />
  );
};

export default LapOneResult;
