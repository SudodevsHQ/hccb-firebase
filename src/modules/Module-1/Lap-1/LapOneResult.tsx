import React from 'react';
import Result from '../../../components/result/result';
import { useCalculateLapOneAmount } from '../calculateLapOneAmount';
import { moduleOneResultData } from '../data';

const LapOneResult: React.FC = () => {
  const savings = useCalculateLapOneAmount();
  const qualities = moduleOneResultData.lapOne(savings);
  return (
    <Result
      lapNumber={1}
      title={'Budget Management'}
      qualities={qualities}
      remark={`You saved ₹${savings}`}
      nextPath="/module/1/lap/2"
    />
  );
};

export default LapOneResult;
