import React from 'react';
import Result from '../../../components/result/result';

const LapFourResult: React.FC = () => {
  return (
    <Result
      title="Leadership Style"
      description="Your Ideal Leadership Style as per Manpower Traits is "
      lapNumber={4}
      qualities={['Participating and Supporting / Selling and Coaching']}
      nextPath="/module/1/lap/5"
    />
  );
};

export default LapFourResult;
