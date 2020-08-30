import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapOneA: React.FC = () => {
  return (
    <MCQ
      lapNumber={1}
      title={'Budget Management'}
      description={
        <p>
          The entire process of retail discounting and purchasing the marketing
          POSMs needs to be planned in 3 brackets of{' '}
          <strong> 10%, 25 % & 50%</strong> with the max. limit of Rs. 20,000.
        </p>
      }
      question={
        <p>
          Choose the Retail Discounting you would want to take up for Aloe-Pop
          sales of 5000 Cases in coming 30 days.
        </p>
      }
      subquestionNumber={'A'}
      options={['10%', '25%', '50%']}
      correctOption={1}
    />
  );
};

export default LapOneA;
