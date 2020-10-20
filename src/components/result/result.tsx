import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import checkCircleFilled from '@iconify/icons-ant-design/check-circle-filled';
import infoCircleFilled from '@iconify/icons-ant-design/info-circle-filled';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import Confetti from 'react-confetti';
import useSound from 'use-sound';

import HeroCard from '../ContentCard/ContentCard';
import ModuleTitle from '../moduleTitle/moduleTitle';
import styles from './result.module.scss';
import PrimaryButton from '../primaryButton/primaryButton';
import useGetDynamicRoute from '../../util/injectRoute';

interface Props {
  lapNumber: number;
  title: string;
  description?: string;
  qualities?: Array<string>;
  suggestions?: Array<string>;
  remark?: string;
  nextPath: string;
  image?: 'result' | 'completed';
}

const Result: React.FC<Props> = ({ image = 'result', ...props }: Props) => {
  const { width, height } = useWindowDimensions();
  const [play, { stop }] = useSound('/static/audio/lap-complete.mp3');

  useEffect(() => {
    play();
    return () => stop();
  }, [play, stop]);

  return (
    <div
      className={`${styles.result} p-md-5 p-4 d-flex text-center justify-content-center`}>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={400}
      />
      <HeroCard>
        <ModuleTitle title={props.title} lapNumber={props.lapNumber} />

        <img
          src={`/static/img/${image}.svg`}
          alt="a trophy"
          className={`my-4 ${styles.image}`}
        />

        <div className={styles.description}>{props.description}</div>

        <div className={`mx-auto text-center my-sm-2 ${styles.qualities}`}>
          {props.qualities?.map((quality) => {
            return (
              <div key={quality} className={`${styles.quality}`}>
                <Icon
                  icon={checkCircleFilled}
                  style={{
                    color: '#6fd05f',
                    fontSize: '2rem',
                  }}
                />
                &nbsp;
                {quality}
              </div>
            );
          })}
          {props.suggestions?.map((suggestion) => (
            <div key={suggestion} className={`${styles.suggestion}`}>
              <Icon
                icon={infoCircleFilled}
                style={{ color: '#ffc652', fontSize: '32px' }}
              />
              &nbsp; {suggestion}
            </div>
          ))}
        </div>

        <div className={styles.remark}>{props.remark}</div>

        <PrimaryButton
          attempted={true}
          path={useGetDynamicRoute(props.nextPath)}>
          Next Lap
        </PrimaryButton>
      </HeroCard>
    </div>
  );
};

export default Result;
