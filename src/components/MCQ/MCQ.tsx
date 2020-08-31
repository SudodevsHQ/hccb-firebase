import React, { useState } from 'react';

import Layout from '../layout/Layout';
import styles from './MCQ.module.scss';
import PrimaryButton from '../primaryButton/primaryButton';

interface Props {
  lapNumber: number;
  title: string;
  description: React.ReactNode;
  question?: React.ReactNode;
  subquestionNumber?: string;
  options: Array<string>;
  correctOption: number;
  nextPath: string;
}

const MCQ: React.FC<Props> = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState(-1);

  return (
    <Layout image="graph">
      <div className="container">
        <h1 className={styles.title}>
          <span className={styles.lap}>Lap {props.lapNumber}</span>:{' '}
          {props.title}
        </h1>
        <div className={styles.description}>{props.description}</div>
        <div className={`container ${styles.optionsBox}`}>
          <div className="row">
            <div className="col-md-1">
              <div className={`${styles.subquestionNumber} text-center p-1`}>
                {props.subquestionNumber}
              </div>
            </div>
            <div
              className={`col-md-11 ${styles.question} d-flex align-items-center`}>
              {props.question}
            </div>
          </div>
          <div className="row justify-content-center">
            {props.options.map((option, index) => (
              <div
                key={option}
                onClick={() => {
                  setSelectedOption(index);
                }}
                className={`col-md-3 d-flex justify-content-center align-items-center 
                ${styles.option} 
                ${index === selectedOption ? styles.selected : ''}`}>
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column">
          <PrimaryButton path={props.nextPath}>Next</PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default MCQ;
