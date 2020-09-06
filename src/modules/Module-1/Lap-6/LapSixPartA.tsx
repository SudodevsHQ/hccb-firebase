import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapSixPartA: React.FC = () => {
  return (
    <MCQ
      title="Negotiation"
      description="Just to Brief: Negotiation is simply a conversation in which you are trying to get something you want, and the goal of negotiation is to find a way to agreement. Negotiation is always tied up with curiosity and creativity."
      question="What kind of conversation will you keep in mind while pushing the product into the market?"
      lapNumber={6}
      image="presentation"
      nextPath="/module/1/lap/6/partA/result"
      options={[
        <p key="1">
          Is it possible to keep a case of Aloe-Pop in the display panel?
        </p>,
        <p key="2">
          How about keeping a case of Aloe-Pop in the display panel ?
        </p>,
      ]}
      optionsPerRow={2}
    />
  );
};

export default LapSixPartA;
