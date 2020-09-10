import { ReduxStore } from '../../interfaces/reduxStore';
import { useSelector } from 'react-redux';

export const useCalculateLapOneAmount = (): number => {
  const { amount, choiceA, choiceB, choiceC, choiceD } = useSelector(
    (state: ReduxStore) => state.moduleOne.lapOne,
  );
  let savings = amount;

  if (choiceA !== null) savings -= savings * 0.01 * choiceA;
  if (choiceB !== null) savings -= savings * 0.01 * choiceB;
  if (choiceC === true) savings -= 1000;
  if (choiceD === true) savings -= 3000;

  return savings;
};
