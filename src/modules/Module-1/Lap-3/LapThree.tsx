import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapThree: React.FC = () => {
  return (
    <MCQ
      title="Set the context "
      lapNumber={3}
      image="dashboard"
      question="What kind of an approach will you choose in setting the context with the team-"
      nextPath="/module/1/lap/3/result"
      options={[
        <p key="1">
          Experimenting with radically new goals, believing that changes will
          make a real difference in pushing this product into the market. The
          team gets excited about the new approach and ready to learn new skills
          to succeed.
        </p>,
        <p key="2">
          To inspire the team you assign the team a mini project to stretch
          their skills and start giving advice on the moves and thinking of the
          project execution. Encourage the team to take up skills and assist
          with your experience in attaining the useful selling skills with on
          ground examples.
        </p>,
        <p key="3">
          You would choose to just spent some time talking with the team, so
          that the team opens up and the group is then ready to focus on the new
          agenda.
        </p>,
        <p key="4">
          You would state the problem areas for the team on driving this product
          in the market and hear-out the first level ideas from them. You do
          listening and try to arrive on the consensus.
        </p>,
        <p key="5">
          You set the context my saying that this is the last 30 day lap before
          the holidays coming in, just to boost them up for high performance
          even in a tiring condition.
        </p>,
      ]}
      optionsPerRow={3}></MCQ>
  );
};

export default LapThree;
