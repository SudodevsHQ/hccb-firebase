import React from 'react';
import { Icon } from '@iconify/react';
import checkCircleFilled from '@iconify/icons-ant-design/check-circle-filled';

import HeroCard from '../ContentCard/ContentCard';
import ModuleTitle from '../moduleTitle/moduleTitle';
import styles from './result.module.scss';
import PrimaryButton from '../primaryButton/primaryButton';

interface Props {
  lapNumber: number;
  title: string;
  description?: string;
  qualities: Array<string>;
  remark?: string;
}

const Result: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`${styles.result} p-5 d-flex text-center justify-content-center`}>
      <HeroCard>
        <ModuleTitle title={props.title} lapNumber={props.lapNumber} />

        <img src="/static/img/result.svg" className="my-4" />

        <div className={styles.description}>{props.description}</div>

        <div className="mx-auto text-center">
          {props.qualities.map((quality) => {
            return (
              <div key={quality} className={styles.quality}>
                <Icon
                  icon={checkCircleFilled}
                  style={{ color: '#6fd05f', fontSize: '32px' }}
                />{' '}
                &nbsp;
                {quality}
              </div>
            );
          })}
        </div>

        <div className={styles.remark}>{props.remark}</div>

        <PrimaryButton path="/">Next Lap</PrimaryButton>
      </HeroCard>
    </div>
  );
};

export default Result;
