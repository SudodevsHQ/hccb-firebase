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
    choice: null,
  },
};

const moduleOneReducer = (
  state = moduleOneDefaultState,
  action: moduleOneActionTypes,
): ModuleOneState => {
  switch (action.type) {
    case 'SET_LAPONE_CHOICE_NUM': {
      return {
        ...state,
        lapOne: {
          ...state.lapOne,
          [`choice${
            (action as SetLapOneChoiceNum).option
          }`]: (action as SetLapOneChoiceNum).choice,
        },
      };
    }

    case 'SET_LAPONE_CHOICE_BOOL': {
      return {
        ...state,
        lapOne: {
          ...state.lapOne,
          [`choice${
            (action as SetLapOneChoiceBool).option
          }`]: (action as SetLapOneChoiceBool).choice,
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
          choice: (action as SingleChoiceAction).choice,
        },
      };

    default:
      return state;
  }
};

export default moduleOneReducer;
