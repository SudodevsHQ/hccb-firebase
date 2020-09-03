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
      <QierPlayer
        srcOrigin="https://assets.mixkit.co/videos/preview/mixkit-motion-graphic-animation-of-futuristic-devices-99786-large.mp4"
        height="100%"
        width="100%"
      />
    </Introduction>
  );
};

export default IntroductionOne;
