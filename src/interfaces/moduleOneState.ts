export interface ModuleOneState {
  lapOne: {
    amount: number;
    choiceA: null | number;
    choiceB: null | number;
    choiceC: null | boolean;
    choiceD: null | boolean;
  };
  lapTwo: {
    choices: null | number[];
  };
  lapThree: {
    choice: null | number;
  };
  lapFour: {
    choice: null | number;
    subjectiveResponse?: string;
  };
  lapFive: {
    order: number[];
  };
  lapSix: {
    choiceA: null | number;
    choiceB: null | number;
  };
  moduleResult: LapResult[];
}

export interface LapResult {
  lapNumber: string;
  title: string;
  description?: string;
  qualities?: string[];
  suggestions?: string[];
  feedback?: string;
}
