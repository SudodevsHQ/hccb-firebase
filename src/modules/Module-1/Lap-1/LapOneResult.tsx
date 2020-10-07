import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Result from '../../../components/result/result';
import { setLapResult } from '../../../redux/actions/moduleOneActions';
import { useCalculateLapOneAmount } from '../utils/calculateLapOneAmount';
import { moduleOneResultData } from '../utils/data';

const LapOneResult: React.FC = () => {
  const savings = useCalculateLapOneAmount();
  const qualities = moduleOneResultData.lapOne(savings);
  const dispatch = useDispatch();

  useEffect(() => {
    const LapOneResult = {
      lapNumber: '1',
      title: 'Budget Management',
      qualities,
    };
    dispatch(setLapResult(LapOneResult));
  }, [dispatch, qualities]);

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
