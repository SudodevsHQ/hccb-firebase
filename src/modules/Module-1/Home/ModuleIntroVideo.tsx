import React from 'react';
import Introduction from '../../../components/Introduction/Introduction';
import QierPlayer from 'qier-player';

const IntroductionOne: React.FunctionComponent = () => {
  return (
    <Introduction
      title="Introduction"
      image="analysis"
      primaryButtonText="Continue"
      nextPath="/module/1/introduction">
      <div className="w-100 h-100" style={{ overflow: 'hidden' }}>
        <QierPlayer
          srcOrigin="/static/video/moduleOneIntro.mp4"
          height="100%"
          width="540"
        />
      </div>
    </Introduction>
  );
};

export default IntroductionOne;
