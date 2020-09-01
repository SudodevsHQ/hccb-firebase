import React, { useState } from 'react';

import Layout from '../layout/Layout';
import styles from './MCQ.module.scss';
import PrimaryButton from '../primaryButton/primaryButton';
import ModuleTitle from '../moduleTitle/moduleTitle';

interface Props {
  lapNumber: number;
  title: string;
  description?: React.ReactNode;
  question?: React.ReactNode;
  subquestionNumber?: string;
  options: Array<React.ReactNode>;
  correctOption?: number;
  nextPath: string;
  optionsPerRow: number;
  image: 'graph' | 'dashboard' | 'man';
}

const MCQ: React.FC<Props> = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState(-1);

  return (
    <Layout image={props.image}>
      <div className="container">
        <ModuleTitle title={props.title} lapNumber={props.lapNumber} />

        <div className={styles.description}>{props.description}</div>
        <div className={`container ${styles.optionsBox} p-5`}>
          <div className={`row ${!props.subquestionNumber && 'd-none'}`}>
            <div className="col-md-1">
              <div className={`${styles.subquestionNumber} text-center p-2`}>
                {props.subquestionNumber}
              </div>
            </div>
            <div
              className={`col-md-11 ${styles.question} d-flex align-items-center`}>
              {props.question}
            </div>
          </div>
          <div
            className={`row justify-content-center px-md-4 ${styles.optionsWrapper}`}>
            {props.options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedOption(index);
                }}
                className={`
                col-md-${12 / props.optionsPerRow - 1} 
                d-flex justify-content-center align-items-center p-4  
                ${styles.option} 
                ${index === selectedOption ? styles.selected : ''}`}>
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column mt-2">
          <PrimaryButton path={props.nextPath}>Next</PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default MCQ;
