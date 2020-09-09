export interface SetLapOneChoiceNum {
  type: string;
  option: 'A' | 'B';
  choice: number;
}
export interface SetLapOneChoiceBool {
  type: string;
  option: 'C' | 'D';
  choice: boolean;
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
  | SetLapOneChoiceNum
  | SetLapOneChoiceBool
  | SingleChoiceAction
  | SetLapFiveOrder
  | SetLapTwoChoices
  | SetLapOneSaving
  | SetLapFourSubjectiveResponse;
