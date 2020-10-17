import React, { useEffect } from 'react';
import Icon from '@iconify/react';
import BgAudioPlayer from '../BgAudioPlayer/BgAudioPlayer';
import fileDoneOutlined from '@iconify/icons-ant-design/file-done-outlined';

import './TopBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxStore } from '../../interfaces/reduxStore';
import { useLocation } from 'react-router-dom';
import { setCurrentLapNumber } from '../../redux/actions/miscActions';

const TopBar: React.FC = () => {
  const currentLapNumber = useSelector(
    (state: ReduxStore) => state.misc.currentLap,
  );
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const currentLap = parseInt(location.pathname.split('/')[7]);
    dispatch(setCurrentLapNumber(currentLap));
  }, [dispatch, location.pathname]);

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
