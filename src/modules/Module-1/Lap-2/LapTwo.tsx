import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapTwo: React.FC = () => {
  return (
    <MCQ
      title="Manpower Management"
      lapNumber={2}
      image="dashboard"
      description={
        <p>
          Good Job with the Budget, You are all set for the sales. Get Set Ready
          for choosing your team and handling team dynamics. You already have 1
          Fresher and 1 Experienced Sales man in your team. <br />
          <strong>You need to recruit 2 more sales men.</strong>
        </p>
      }
      nextPath="/module/1/lap/2/result"
      options={[
        <p key="rakesh">
          <strong>Rakesh</strong> is an experience personal, has amazing
          technical selling skills. However, he is dictatorial work style. For
          him the goals are utmost important and emotional needs are secondary.
          As per his previous performance he had a lot of quarrels with the
          distributors on pushing numbers, we ultimately has achieved the
          numbers well. He is a good executer and has been into top in all the
          sales metrics.
        </p>,
        <p key="rohan">
          <strong>Rohan</strong> is an enthusiastic management trainee, he has
          been in the organisation for only 6 months. He is a very good solution
          provider and has excellent theoretical knowledge. The Analytical
          skills for Rohan is amazing and is always ready to learn new-skills.
          He has been a real good case study solver, but getting along with Gen
          X is an area to be developed
        </p>,
        <p key="reema">
          <strong>Reema</strong> is a self-enthusiastic champ who is extremely
          self-disciplined and exceptional in communication. She always has
          options of hearing out the team of MGRs, hearing out the options
          properly and then reacting. She has been known for her experience of
          improvising the market share of local juices in the current market.
          She has a family back at home with a small kid , thus work balance
          would be of key priority for her.
        </p>,
        <p key="gourav">
          <strong>Gourav</strong> is an experienced personal have past
          experience of competitor companies. He is a very costly resource as a
          lateral entrant. He has a good skill set of convincing and influencing
          people. He is renowned for his checklist doing, and sticking to the
          schedules and is a planner, and believes in strategic thinking. He is
          new to the city, thus the market is unknown to him.
        </p>,
      ]}
      optionsPerRow={2}
      numberOfCorrectOptions={2}
      error="Please select two options!"
      stateSelector={(state) => state.moduleOne.lapTwo.choices}></MCQ>
  );
};

export default LapTwo;
