import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapOneD: React.FC = () => {
  return (
    <MCQ
      lapNumber={1}
      title={'Budget Management'}
      image="graph"
      description={
        <p>
          The entire process of retail discounting and purchasing the marketing
          POSMs needs to be planned in 3 brackets of{' '}
          <strong> 10%, 25 % & 50%</strong> with the max. limit of Rs. 20,000.
        </p>
      }
      question={<p>Do you want to pop up with Truck Vinyl @ 3000 INR ?</p>}
      subquestionNumber={'D'}
      options={['Yes', 'No']}
      correctOption={1}
      optionsPerRow={2}
      nextPath="/module/1/lap/1/result"
    />
  );
};

export default LapOneD;
