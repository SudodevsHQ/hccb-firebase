export interface moduleOneState {
  lapOne: {
    amount: number;
    choiceA: null | number;
    choiceB: null | number;
    choiceC: null | number;
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
    choice: null | number;
  };
}
