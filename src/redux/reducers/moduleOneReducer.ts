import { ModuleOneState } from '../../interfaces/moduleOneState';
import {
  SingleChoiceAction,
  SetLapTwoChoices,
  SetLapFiveOrder,
  SetLapFourSubjectiveResponse,
  SetLapOneChoiceNum,
  SetLapOneChoiceBool,
  SetLapResult,
} from '../../interfaces/moduleOneAction.types';
import { AnyAction } from 'redux';

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
  moduleResult: [],
};

const moduleOneReducer = (
  state = moduleOneDefaultState,
  action: AnyAction,
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
          ...state.lapSix,
          [`choice${
            (action as SetLapOneChoiceNum).option
          }`]: (action as SingleChoiceAction).choice,
        },
      };

    case 'SET_LAP_RESULT': {
      // hack to prevent duplicate entries
      const newArr = [...state.moduleResult, (action as SetLapResult).result];
      const uniqueValues = new Set(newArr.map((v) => v.lapNumber));
      if (newArr.length > uniqueValues.size) {
        return state;
      }
      return {
        ...state,
        moduleResult: [...state.moduleResult, (action as SetLapResult).result],
      };
    }

    default:
      return state;
  }
};

export default moduleOneReducer;
