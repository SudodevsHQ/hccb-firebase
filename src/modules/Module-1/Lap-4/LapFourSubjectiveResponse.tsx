import React from 'react';
import SCQ from '../../../components/SCQ/SCQ';

const LapFour: React.FC = () => {
  return (
    <SCQ
      title="What kind of style would you like to adapt?"
      description="With the chosen Manpower in Lap 2, what kind of leadership style would you like to adapt more? "
      question={
        <p>[OPTIONAL] &nbsp; Why did you select this leadership style?</p>
      }
      lapNumber={4}
      image="man"
      nextPath="/module/1/lap/5">
      <textarea
        key={'1'}
        className="w-100 h-100 form-control mb-4"
        rows={10}
        placeholder=" &nbsp; Describe more..."
      />
    </SCQ>
  );
};

export default LapFour;
