import {
  moduleOneActionTypes,
  SetLapFourSubjectiveResponse,
  SetLapOneChoiceNum,
  SetLapOneChoiceBool,
} from '../../interfaces/moduleOneAction.types';
import { LapResult } from '../../interfaces/moduleOneState';
import { lapOnedata } from '../../modules/Module-1/utils/data';

export const setLapOneChoiceNumA = (choice: number): SetLapOneChoiceNum => {
  return {
    type: 'SET_LAPONE_CHOICE_NUM',
    option: 'A',
    choice: lapOnedata.moduleOne.lapOne.A[choice],
  };
};

export const setLapOneChoiceNumB = (choice: number): SetLapOneChoiceNum => {
  return {
    type: 'SET_LAPONE_CHOICE_NUM',
    option: 'B',
    choice: lapOnedata.moduleOne.lapOne.B[choice],
  };
};

export const setLapOneChoiceBoolC = (choice: number): SetLapOneChoiceBool => {
  return {
    type: 'SET_LAPONE_CHOICE_BOOL',
    option: 'C',
    choice: lapOnedata.moduleOne.lapOne.C[choice],
  };
};

export const setLapOneChoiceBoolD = (choice: number): SetLapOneChoiceBool => {
  return {
    type: 'SET_LAPONE_CHOICE_BOOL',
    option: 'D',
    choice: lapOnedata.moduleOne.lapOne.D[choice],
  };
};

export const setLapOneSaving = (savings: number): moduleOneActionTypes => {
  return {
    type: 'SET_LAPONE_SAVINGS',
    savings,
  };
};

export const setLapTwoChoices = (choices: number[]): moduleOneActionTypes => {
  return {
    type: 'SET_LAPTWO_CHOICES',
    choices,
  };
};

export const setLapThreeChoice = (choice: number): moduleOneActionTypes => {
  return {
    type: 'SET_LAPTHREE_CHOICE',
    choice,
  };
};

export const setLapFourChoice = (choice: number): moduleOneActionTypes => {
  return {
    type: 'SET_LAPFOUR_CHOICE',
    choice,
  };
};

export const setLapFourSubjectiveResponse = (
  response: string,
): SetLapFourSubjectiveResponse => ({
  type: 'SET_LAPFOUR_SUBJECTIVE_RESPONSE',
  response,
});

export const setLapFiveOrder = (order: number[]): moduleOneActionTypes => {
  return {
    type: 'SET_LAPFIVE_ORDER',
    order,
  };
};

export const setLapSixChoiceA = (choice: number): moduleOneActionTypes => {
  return {
    type: 'SET_LAPSIX_CHOICE',
    option: 'A',
    choice,
  };
};

export const setLapSixChoiceB = (choice: number): moduleOneActionTypes => {
  return {
    type: 'SET_LAPSIX_CHOICE',
    option: 'B',
    choice,
  };
};

export const setLapResult = (result: LapResult): moduleOneActionTypes => ({
  type: 'SET_LAP_RESULT',
  result,
});
