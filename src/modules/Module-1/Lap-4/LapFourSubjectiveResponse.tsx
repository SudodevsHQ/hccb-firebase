import React from 'react';
import MCQ from '../../../components/MCQ/MCQ';

const LapFour: React.FC = () => {
  return (
    <MCQ
      title="What kind of style would you like to adapt?"
      question={
        <p>You chose “Participating and Supporting” Why do you think So?</p>
      }
      lapNumber={4}
      image="man"
      nextPath="/module/1/lap/5"
      options={[
        <textarea
          key={'1'}
          className="w-100 h-100 form-control"
          rows={8}
          placeholder="Write about why you chose this option..."></textarea>,
      ]}
      optionsPerRow={2}></MCQ>
  );
};

export default LapFour;
