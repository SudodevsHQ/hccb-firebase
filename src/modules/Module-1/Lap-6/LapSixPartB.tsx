import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapSixPartA: React.FC = () => {
  return (
    <MCQ
      title="Negotiation - Part 2"
      description="Just to Brief: Negotiation is simply a conversation in which you are trying to get something you want, and the goal of negotiation is to find a way to agreement. Negotiation is always tied up with curiosity and creativity."
      question="What kind of conversation will you keep in mind while pushing the product into the market?"
      lapNumber={6}
      image="presentation"
      nextPath="/module/1/lap/6/partB/result"
      options={[
        <p key="1">
          If the retailer says a No, I would try to begin the conversation on
          “What is your budget around?
        </p>,
        <p key="2">
          If the retailer says a No, would try to ask “If you would like to keep
          10 bottles for trial?
        </p>,
      ]}
      optionsPerRow={2}
    />
  );
};

export default LapSixPartA;
