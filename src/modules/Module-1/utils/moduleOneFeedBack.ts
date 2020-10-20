export const moduleOneFeedback = {
  lapOne: (saving: number): string => {
    if (saving < 5000) {
      return 'You saved less than 5,000 INR and enthusiastically dealt the budget assuming spend is proportional to immediate business result.';
    } else if (saving >= 5000 && saving < 10000) {
      return 'You took up an Ideal savings of 5,000 – 10,000 INR as an responsible individual taking the calculated risk for future business growth and simultaneously making sure mindful use of money';
    } else
      return 'You successfully saved more than 10,000 INR, managing the budget judiciously. Considering the future aspects and how your choices might affect the business you took up the decision for discounting slabs and material usage judiciously. ';
  },
  lapTwo: (choices: number[]): string => {
    switch (choices[0]) {
      case 0: {
        switch (choices[1]) {
          case 1:
            return 'Good Job with team selection . You have goal -focused and solution driven approach to engage and well-defined team talent. You have chosen the best team mix , the next step is to drive the business and be a team player ';
          case 2:
            return 'You have chosen a team with the perspective and ability to work as one encompassing not only driving numbers but also giving values to diverse opinions. You have an approach to  care about your employees and invest in their success ';
          case 3:
            return 'You have dealt this in a systematic way to plan the activities based on experience and less trainability.';
          default:
            return '';
        }
      }
      case 1:
        switch (choices[1]) {
          case 2:
            return 'Your team has a good balance of collaboration and generating new ideas. This mixture shall lead to a task-oriented team, new and improved solutions to the business            ';
          case 3:
            return 'You have an approach to train the newbies and develop as per the business need. Get your shoes on development offerings and set right work behaviour for amazing results';
          default:
            return '';
        }
      case 2:
        return 'Discipline being the essential skill set, your team is committed to work purpose and business goals. ';

      default:
        return '';
    }
  },
  lapFour: (choices: number[]): string => {
    switch (choices[0]) {
      case 0: {
        switch (choices[1]) {
          case 1:
            return 'This style shows high supportive behaviours, but low directive behaviours. This may involve listening, praise and a high level of interaction between leader and follower. The second manpower chosen would require, high directive and high supportive competency to handle the team';
          case 2:
            return 'This style  shows high supportive behaviours, but low directive behaviours. This may involve listening, praise and a high level of interaction between leader and follower';
          case 3:
            return 'Leadership style assumes a low supportive and a low directive behaviour. The leader can further encourage autonomy, while keeping an eye on not overloading the follower with responsibility and not withdrawing completely from the follower’s proximity. For these type of followers it is thus important as a leader to keep observing and monitoring them, in order to provide the necessary support if needed.';
          default:
            return '';
        }
      }
      case 1:
        switch (choices[1]) {
          case 2:
            return 'This style puts a high emphasis on directive behaviour and a low emphasis on supportive behaviour. A leader’s primary concern lays with the task delivery and less with the personal needs of the subordinates. In such a situation, it is important that the task is clearly defined and the stages of the process are easy to follow. ';
          case 3:
            return 'This style shows high supportive behaviours, but low directive behaviours. This may involve listening, praise and a high level of interaction between leader and follower The second manpower chosen would require, high directive and high supportive competency to handle the team. Thus would require increasing the confidence and skills of the followers.  ';
          default:
            return '';
        }
      case 2:
        return 'This style would require high directive and supportive competency thus concerned with increasing the confidence and skills of followers so that they can ultimately take on more responsibility for their actions';
      default:
        return '';
    }
  },
};

export default moduleOneFeedback;
