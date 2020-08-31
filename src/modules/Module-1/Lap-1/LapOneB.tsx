import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapOneB: React.FC = () => {
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
          Good Job ! Now you have (20,000 – x ) INR left for purchasing the
          marketing materials. The marketing materials include stall banners,
          new product promotion Ads, walls stickers (4” * 4”) etc.
        </p>
      }
      subquestionNumber={'B'}
      options={['10%', '25%', '50%']}
      correctOption={1}
      nextPath="/module/1/lap/1c"
    />
  );
};

export default LapOneB;
