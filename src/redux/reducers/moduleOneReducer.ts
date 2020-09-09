import { ModuleOneState } from '../../interfaces/moduleOneState';
import {
  moduleOneActionTypes,
  SingleChoiceAction,
  SetLapTwoChoices,
  SetLapFiveOrder,
  SetLapFourSubjectiveResponse,
  SetLapOneChoiceNum,
  SetLapOneChoiceBool,
} from '../../interfaces/moduleOneAction.types';

const moduleOneDefaultState: ModuleOneState = {
  lapOne: {
    amount: 20000,
    choiceA: null,
    choiceB: null,
    choiceC: null,
    choiceD: null,
  },
  lapTwo: {
    choices: [],
  },
  lapThree: {
    choice: null,
  },
  lapFour: {
    choice: null,
    subjectiveResponse: undefined,
  },
  lapFive: {
    order: [],
  },
  lapSix: {
    choiceA: null,
    choiceB: null,
  },
};

const moduleOneReducer = (
  state = moduleOneDefaultState,
  action: moduleOneActionTypes,
): ModuleOneState => {
  switch (action.type) {
    case 'SET_LAPONE_CHOICE_NUM': {
      const amount =
        state.lapOne.amount -
        state.lapOne.amount * 0.01 * (action as SetLapOneChoiceNum).choice;
      return {
        ...state,
        lapOne: {
          ...state.lapOne,
          [`choice${
            (action as SetLapOneChoiceNum).option
          }`]: (action as SetLapOneChoiceNum).choice,
          amount,
        },
      };
    }

    case 'SET_LAPONE_CHOICE_BOOL': {
      let amount = state.lapOne.amount;

      if ((action as SetLapOneChoiceBool).choice) {
        const deduction =
          (action as SetLapOneChoiceBool).option === 'C' ? 1000 : 3000;
        amount = state.lapOne.amount - deduction;
      }
      return {
        ...state,
        lapOne: {
          ...state.lapOne,
          [`choice${
            (action as SetLapOneChoiceNum).option
          }`]: (action as SetLapOneChoiceNum).choice,
          amount,
        },
      };
    }

    case 'SET_LAPTWO_CHOICES':
      return {
        ...state,
        lapTwo: {
          choices: (action as SetLapTwoChoices).choices,
        },
      };
    case 'SET_LAPTHREE_CHOICE':
      return {
        ...state,
        lapThree: {
          choice: (action as SingleChoiceAction).choice,
        },
      };
    case 'SET_LAPFOUR_CHOICE':
      return {
        ...state,
        lapFour: {
          choice: (action as SingleChoiceAction).choice,
        },
      };
    case 'SET_LAPFOUR_SUBJECTIVE_RESPONSE':
      return {
        ...state,
        lapFour: {
          ...state.lapFour,
          subjectiveResponse: (action as SetLapFourSubjectiveResponse).response,
        },
      };

    case 'SET_LAPFIVE_ORDER':
      return {
        ...state,
        lapFive: {
          order: (action as SetLapFiveOrder).order,
        },
      };

    case 'SET_LAPSIX_CHOICE':
      return {
        ...state,
        lapSix: {
          ...state.lapSix,
          [`choice${
            (action as SetLapOneChoiceNum).option
          }`]: (action as SingleChoiceAction).choice,
        },
      };

    default:
      return state;
  }
};

export default moduleOneReducer;
