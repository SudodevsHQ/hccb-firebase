import React from 'react';
import Icon from '@iconify/react';
import BgAudioPlayer from '../BgAudioPlayer/BgAudioPlayer';
import fileDoneOutlined from '@iconify/icons-ant-design/file-done-outlined';

import './TopBar.scss';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../interfaces/reduxStore';

const TopBar: React.FC = () => {
  const currentLapNumber = useSelector(
    (state: ReduxStore) => state.misc.currentLap,
  );

  return (
    <div className="progress-container d-flex justify-content-center align-items-center ">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={(currentLapNumber * 100) / 6}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${(currentLapNumber * 100) / 6}%` }}></div>
      </div>
      <span>
        <Icon icon={fileDoneOutlined} style={{ fontSize: '25px' }} />
      </span>
      <BgAudioPlayer />
    </div>
  );
};

export default TopBar;
