import { useSelector } from 'react-redux';
import { ReduxStore } from '../interfaces/reduxStore';
import { useCalculateLapOneAmount } from '../modules/Module-1/utils/calculateLapOneAmount';
import moduleOneFeedback from '../modules/Module-1/utils/moduleOneFeedBack';

const useModuleOneFeedback = (): Record<string, string> => {
  const lapOneSavings = useCalculateLapOneAmount();
  const lapTwoChoices = useSelector(
    (state: ReduxStore) => state.moduleOne.lapTwo.choices,
  );

  const lapOneFeedback = moduleOneFeedback.lapOne(lapOneSavings);
  let lapTwoFeedback = '';
  let lapFourFeedback = '';
  if (lapTwoChoices !== null) {
    lapTwoFeedback = moduleOneFeedback.lapTwo(lapTwoChoices.sort());
    lapFourFeedback = moduleOneFeedback.lapFour(lapTwoChoices.sort());
  }
  return { '1': lapOneFeedback, '2': lapTwoFeedback, '4': lapFourFeedback };
};

export default useModuleOneFeedback;
