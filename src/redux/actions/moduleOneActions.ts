import {
  moduleOneActionTypes,
  SetLapFourSubjectiveResponse,
} from '../../interfaces/moduleOneAction.types';

export const setLapOneChoice = (
  option: string,
  choice: number | boolean,
): moduleOneActionTypes => {
  return {
    type: 'SET_LAPONE_CHOICE',
    option,
    choice,
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

export const setLapSixChoice = (choice: number): moduleOneActionTypes => {
  return {
    type: 'SET_LAPSIX_CHOICE',
    choice,
  };
};
