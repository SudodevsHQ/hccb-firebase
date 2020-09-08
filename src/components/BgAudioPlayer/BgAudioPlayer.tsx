import React, { useEffect } from 'react';
import useSound from 'use-sound';
import { Icon } from '@iconify/react';
import soundOnSolid from '@iconify/icons-ant-design/sound-fill';
import soundOffOutline from '@iconify/icons-teenyicons/sound-off-outline';
import { useLocation } from 'react-router-dom';

import styles from './BgAudioPlayer.module.scss';

const BgAudioPlayer: React.FC = () => {
  const [play, { isPlaying, pause }] = useSound(
    '/static/audio/quiz-bg-music.mp3',
    {
      interrupt: true,
      loop: true,
    },
  );
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' && !isPlaying) {
      play();
    }
    //eslint-disable-next-line
  }, [play, location.pathname]);

  return (
    <div
      className={`${styles.audio}`}
      onClick={() => (isPlaying ? pause() : play())}>
      {isPlaying ? (
        <div className={`${styles.audioToggle}`}>
          <Icon
            icon={soundOnSolid}
            style={{ color: '#7c57f6', fontSize: '25px' }}
          />
          Music ON
        </div>
      ) : (
        <div className={`${styles.audioToggle}`}>
          <Icon
            icon={soundOffOutline}
            style={{ color: '#7c57f6', fontSize: '25px' }}
          />
          Music OFF
        </div>
      )}
    </div>
  );
};

export default BgAudioPlayer;
