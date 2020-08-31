import React from 'react';
import styles from './moduleTitle.module.scss';

interface Props {
  lapNumber: number;
  title: string;
}

const ModuleTitle: React.FC<Props> = (props: Props) => {
  return (
    <h1 className={styles.title}>
      <span className={styles.lap}>Lap {props.lapNumber}:</span> {props.title}
    </h1>
  );
};

export default ModuleTitle;
