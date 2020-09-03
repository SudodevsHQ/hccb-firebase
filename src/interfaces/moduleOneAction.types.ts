export interface SetLapOneChoice {
  type: string;
  option: string;
  choice: number | boolean;
}

export interface SetLapOneSaving {
  type: string;
  savings: number;
}

export interface SetLapTwoChoices {
  type: string;
  choices: number[];
}

// Action creater for lap 3 and 4
export interface SingleChoiceAction {
  type: string;
  choice: number;
}

export interface SetLapFourSubjectiveResponse {
  type: string;
  response: string;
}

export interface SetLapFiveOrder {
  type: string;
  order: number[];
}

export type moduleOneActionTypes =
  | SetLapOneChoice
  | SingleChoiceAction
  | SetLapFiveOrder
  | SetLapTwoChoices
  | SetLapOneSaving
  | SetLapFourSubjectiveResponse;
