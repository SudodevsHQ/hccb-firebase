import React from 'react';
import Result from '../../../components/result/result';

const LapTwoResult: React.FC = () => {
  return (
    <Result
      title="Manpower  Management"
      description="Your decision shows these qualities"
      lapNumber={2}
      qualities={[
        'Inclusive, Collaborative, Empathetic',
        'Belief in Efficient Team',
        'People Oriented',
      ]}
      nextPath="/module/1/lap/3"
    />
  );
};

export default LapTwoResult;
