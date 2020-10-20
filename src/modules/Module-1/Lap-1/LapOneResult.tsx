import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Result from '../../../components/result/result';
import { setLapResult } from '../../../redux/actions/moduleOneActions';
import { useCalculateLapOneAmount } from '../utils/calculateLapOneAmount';
import { moduleOneResultData } from '../utils/data';
import moduleOneFeedback from '../utils/moduleOneFeedBack';

const LapOneResult: React.FC = () => {
  const savings = useCalculateLapOneAmount();
  const qualities = moduleOneResultData.lapOne(savings);
  const dispatch = useDispatch();

  useEffect(() => {
    const LapOneResult = {
      lapNumber: '1',
      title: 'Budget Management',
      qualities,
      feedback: moduleOneFeedback.lapOne(savings),
    };
    dispatch(setLapResult(LapOneResult));
  }, [dispatch, qualities, savings]);

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
