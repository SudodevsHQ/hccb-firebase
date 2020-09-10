import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';
import { useCalculateLapOneAmount } from '../calculateLapOneAmount';

const LapOneB: React.FC = () => {
  const savingsAfterLapOneA = useCalculateLapOneAmount();

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
      question={
        <p>
          Good Job ! Now you have {savingsAfterLapOneA} INR left for purchasing
          the marketing materials. The marketing materials include stall
          banners, new product promotion Ads, walls stickers (4” * 4”) etc.
        </p>
      }
      subquestionNumber={'B'}
      options={['10%', '25%', '50%']}
      optionsPerRow={3}
      nextPath="/module/1/lap/1/c"
      stateSelector={(state) => state.moduleOne.lapOne.choiceB}
    />
  );
};

export default LapOneB;
