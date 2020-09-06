import React from 'react';
import Result from '../../../components/result/result';

const LapSixResultA: React.FC = () => {
  return (
    <Result
      title="Negotiation"
      lapNumber={6}
      suggestions={[
        'Ask Diagnostic Questions (Open Ended , Who When, how and Why)',
      ]}
      nextPath="/module/1/lap/6/partB"
      image="completed"
    />
  );
};

export default LapSixResultA;
