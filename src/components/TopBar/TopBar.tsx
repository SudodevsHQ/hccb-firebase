import React from 'react';
import Icon from '@iconify/react';
import BgAudioPlayer from '../BgAudioPlayer/BgAudioPlayer';
import fileDoneOutlined from '@iconify/icons-ant-design/file-done-outlined';

import './TopBar.scss';

const TopBar: React.FC = () => {
  return (
    <div className="progress-container d-flex justify-content-center align-items-center ">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: '75%' }}></div>
      </div>
      <span>
        <Icon icon={fileDoneOutlined} style={{ fontSize: '25px' }} />
      </span>
      <BgAudioPlayer />
    </div>
  );
};

export default TopBar;
