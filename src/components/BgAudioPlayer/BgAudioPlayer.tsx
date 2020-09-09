import React from 'react';
import useSound from 'use-sound';
import { Icon } from '@iconify/react';
import soundOnSolid from '@iconify/icons-ant-design/sound-fill';
import soundOffOutline from '@iconify/icons-teenyicons/sound-off-outline';

import styles from './BgAudioPlayer.module.scss';
import { ReduxStore } from '../../interfaces/reduxStore';
import { useSelector, useDispatch } from 'react-redux';
import { setAudioState } from '../../redux/actions/miscActions';

const BgAudioPlayer: React.FC = () => {
  const isAudioPlaying = useSelector((state: ReduxStore) => state.misc.playing);
  const dispatch = useDispatch();

  const [play, { pause }] = useSound('/static/audio/quiz-bg-music.mp3', {
    interrupt: true,
    loop: true,
  });

  return (
    <div
      className={`${styles.audio}`}
      onClick={() => {
        if (isAudioPlaying) {
          pause();
          dispatch(setAudioState(false));
        } else {
          play();
          dispatch(setAudioState(true));
        }
      }}>
      {isAudioPlaying ? (
        <div className={`${styles.audioToggle}`}>
          <Icon
            icon={soundOnSolid}
            style={{ color: '#7c57f6', fontSize: '25px' }}
          />
        </div>
      ) : (
        <div className={`${styles.audioToggle}`}>
          <Icon
            icon={soundOffOutline}
            style={{ color: '#7c57f6', fontSize: '25px' }}
          />
        </div>
      )}
    </div>
  );
};

export default BgAudioPlayer;
