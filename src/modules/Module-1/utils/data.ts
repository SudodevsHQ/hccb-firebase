import {
  setLapOneSaving,
  setLapTwoChoices,
  setLapThreeChoice,
  setLapFourChoice,
  setLapFourSubjectiveResponse,
  setLapFiveOrder,
  setLapSixChoiceA,
  setLapSixChoiceB,
  setLapOneChoiceNumA,
  setLapOneChoiceNumB,
  setLapOneChoiceBoolC,
  setLapOneChoiceBoolD,
} from '../../../redux/actions/moduleOneActions';

export const lapOnedata = {
  moduleOne: {
    lapOne: {
      amount: 20000,
      A: [10, 25, 50],
      B: [10, 25, 50],
      C: [true, false],
      D: [true, false],
    },
  },
};

export const moduleOneResultData = {
  lapOne: (saving: number): string[] => {
    if (saving < 5000) {
      return ['Highly Enthusatic', 'Short term thinker'];
    } else if (saving >= 5000 && saving < 10000) {
      return ['Accountable and Responsible'];
    } else return ['Long term thinker'];
  },
  lapTwo: (choices: number[]): string[] => {
    switch (choices[0]) {
      case 0: {
        switch (choices[1]) {
          case 1:
            return ['Believes in Coaching', 'Good Team Mix'];
          case 2:
            return [
              'Inclusive',
              'Collaborative',
              'Empathetic',
              'Believe in Efficient Team',
              'People Oriented',
            ];
          case 3:
            return ['Organized'];
          default:
            return [''];
        }
      }
      case 1:
        switch (choices[1]) {
          case 2:
            return [
              'Inclusive',
              'Collaborative',
              'Innovative Solution',
              'Driven',
            ];
          case 3:
            return ['Training New Talent'];
          default:
            return [''];
        }
      case 2:
        return ['Disciplined Team'];

      default:
        return [''];
    }
  },
  lapThree: (choice: number): string => {
    switch (choice) {
      case 0:
        return 'Authoritative Style (Get excited about change, and let your team see your enthusiasm)';
      case 1:
        return 'Coaching Leader building long-term skills, lot of direction and feedback to make appropriate moves.';
      case 2:
        return 'Affiliative style (highly focused on emotion )';
      case 3:
        return 'Democratic leadership style, Leaders using this leadership style actively seek input from their teams, and they rely more on listening than directing.';
      case 4:
        return 'The Pacesetting leadership style focuses on performance and meeting goals.';
      default:
        return '';
    }
  },
  lapFour: (choices: number[]): string[] => {
    switch (choices[0]) {
      case 0: {
        switch (choices[1]) {
          case 1:
            return ['Participating and Supporting', 'Selling and Coaching'];
          case 2:
            return ['Participating and Supporting'];
          case 3:
            return ['Delegating to the employees'];
          default:
            return [''];
        }
      }
      case 1:
        switch (choices[1]) {
          case 2:
            return ['Telling and Directing'];
          case 3:
            return ['Participating and Supporting', 'Selling and Coaching'];
          default:
            return [''];
        }
      case 2:
        return ['Selling and Coaching'];
      default:
        return [''];
    }
  },
  lapFive: [
    { id: 1, content: 'Planning & Preparation' },
    { id: 2, content: 'Approach – Opening the call' },
    { id: 3, content: 'Stock Check and Store Check' },
    { id: 4, content: 'Sell and Secure' },
    { id: 5, content: 'Increase (NPD & Range Selling)' },
    { id: 6, content: 'Outlet Merchandising' },
    { id: 7, content: 'Notify and Close the call.' },
  ],
  lapSix: (subQuestion: string, choice: number): [string, boolean] => {
    switch (subQuestion) {
      case 'A':
        if (choice === 0)
          return [
            'Ask Diagnostic Questions (Open Ended , Who When, how and Why)',
            false,
          ];
        else
          return [
            'Try to receive full attention of the Retailer, get connected to them and GO SLOW.',
            true,
          ];
      case 'B':
        if (choice === 0)
          return [
            'Ask Diagnostic Questions (Open Ended , Who When, how and Why)',
            true,
          ];
        else
          return [
            'Try to receive full attention of the Retailer, get connected to them and GO SLOW.',
            false,
          ];
      default:
        return ['', false];
    }
  },
};

export const actionBuilderMap = {
  moduleOne: {
    lapOne: {
      amount: setLapOneSaving,
      choiceA: setLapOneChoiceNumA,
      choiceB: setLapOneChoiceNumB,
      choiceC: setLapOneChoiceBoolC,
      choiceD: setLapOneChoiceBoolD,
    },
    lapTwo: {
      choices: setLapTwoChoices,
    },
    lapThree: {
      choice: setLapThreeChoice,
    },
    lapFour: {
      choice: setLapFourChoice,
      subjectiveResponse: setLapFourSubjectiveResponse,
    },
    lapFive: {
      order: setLapFiveOrder,
    },
    lapSix: {
      choiceA: setLapSixChoiceA,
      choiceB: setLapSixChoiceB,
    },
  },
};
