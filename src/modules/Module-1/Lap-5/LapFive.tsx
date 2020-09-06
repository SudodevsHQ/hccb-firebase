import React from 'react';
import SCQ from '../../../components/SCQ/SCQ';
import ReorderableList from '../../../components/ReorderableList/ReorderableList';

const LapFive: React.FC = () => {
  return (
    <SCQ
      title="Revisiting the fundamentals"
      description="Put the steps into order"
      lapNumber={5}
      image="puzzle"
      nextPath="/module/1/lap/4/why">
      <ReorderableList />
    </SCQ>
  );
};

export default LapFive;
