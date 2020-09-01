export interface SetLapOneChoice {
  type: string;
  option: string;
  choice: number | boolean;
}

export interface SetLapOneSaving {
  type: string;
  savings: number;
}

export interface SingleChoiceAction {
  type: string;
  choice: number;
}

export interface SetLapTwoChoices {
  type: string;
  choices: number[];
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
  | SetLapOneSaving;
