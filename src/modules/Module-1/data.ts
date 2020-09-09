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
} from '../../redux/actions/moduleOneActions';

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
    if (saving >= 2000 && saving < 5000) {
      return ['Highly Enthusatic', 'Short term thinker'];
    } else if (saving >= 5000 && saving < 10000) {
      return ['Accountable and Responsible'];
    } else return ['Long term thinker'];
  },
  lapTwo: {
    1: {
      2: ['Believes in Coaching', 'Good Team Mix'],
      3: [
        'Inclusive',
        'Collaborative',
        'Empathetic',
        'Believe in Efficient Team',
        'People Oriented',
      ],
      4: ['Organized'],
    },
    2: {
      3: ['Inclusive', 'Collaborative', 'Innovative Solution', 'Driven'],
      4: ['Training New Talent'],
    },
    3: ['Disciplined Team'],
  },
  lapThree: {
    1: 'Authoritative Style (Get excited about change, and let your team see your enthusiasm)',
    2: 'Coaching Leader building long-term skills, lot of direction and feedback to make appropriate moves.',
    3: 'Affiliative style (highly focused on emotion )',
    4: 'Democratic leadership style, Leaders using this leadership style actively seek input from their teams, and they rely more on listening than directing.',
    5: 'The Pacesetting leadership style focuses on performance and meeting goals.',
  },
  lapFour: {
    1: {
      2: ['Participating and Supporting', 'Selling and Coaching'],
      3: ['Participating and Supporting'],
      4: ['Delegating to the employees'],
    },
    2: {
      3: ['Telling and Directing'],
      4: ['Participating and Supporting', 'Selling and Coaching'],
    },
    3: ['Selling and Coaching'],
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
  lapSix: {
    1: 2,
    2: 1,
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
