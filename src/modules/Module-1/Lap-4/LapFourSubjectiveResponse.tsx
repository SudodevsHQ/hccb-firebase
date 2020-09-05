import React from 'react';
import SCQ from '../../../components/SCQ/SCQ';

const LapFour: React.FC = () => {
  return (
    <SCQ
      title="What kind of style would you like to adapt?"
      question={
        <p>You chose “Participating and Supporting” Why do you think So?</p>
      }
      lapNumber={4}
      image="man"
      nextPath="/module/1/lap/5"
      child={
        <textarea
          key={'1'}
          className="w-100 h-100 form-control mb-4"
          rows={10}
          placeholder="Write about why you chose this option..."></textarea>
      }></SCQ>
  );
};

export default LapFour;
