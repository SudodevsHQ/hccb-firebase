import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';
import ReorderableList from '../../../components/ReorderableList/ReorderableList';

const LapFive: React.FC = () => {
  return (
    <MCQ
      title="Revisiting the fundamentals"
      description="Put the steps into order"
      lapNumber={5}
      image="puzzle"
      nextPath="/module/1/lap/4/why"
      options={[<ReorderableList key={1} />]}
      optionsPerRow={2}></MCQ>
  );
};

export default LapFive;
