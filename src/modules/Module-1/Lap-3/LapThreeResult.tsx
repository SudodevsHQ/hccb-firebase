import React from 'react';
import Result from '../../../components/result/result';

const LapTwoResult: React.FC = () => {
  return (
    <Result
      title="Setting the context"
      lapNumber={3}
      description="Your decision shows these qualities"
      qualities={[
        'Democratic leadership style, Leaders using this leadership style actively seek input from their teams, and they rely more on listening than directing',
      ]}
      nextPath="/module/1/lap/4"
    />
  );
};

export default LapTwoResult;
