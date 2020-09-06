import React from 'react';
import Result from '../../../components/result/result';

const LapSixResultB: React.FC = () => {
  return (
    <Result
      title="Negotiation - Part 2"
      lapNumber={6}
      qualities={[
        'Negotiations are ought to be slow and relational and not fast and transactional. ',
      ]}
      nextPath="/module/1/conclusion"
      image="completed"
    />
  );
};

export default LapSixResultB;
