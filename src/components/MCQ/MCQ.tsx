// Multiple-Choice Question Component

import React from 'react';

import Layout from '../layout/Layout';
import styles from './MCQ.module.scss';
import PrimaryButton from '../primaryButton/primaryButton';
import ModuleTitle from '../moduleTitle/moduleTitle';
import { useReduxState } from '../../hooks/useReduxState';
import { ReduxStore } from '../../interfaces/reduxStore';

interface Props {
  lapNumber: number;
  title: string;
  description?: React.ReactNode;
  question?: React.ReactNode;
  subquestionNumber?: string;
  options: Array<React.ReactNode>;
  numberOfCorrectOptions?: number;
  nextPath: string;
  optionsPerRow: number;
  image:
    | 'graph'
    | 'quiz'
    | 'dashboard'
    | 'man'
    | 'analysis'
    | 'puzzle'
    | 'presentation';
  stateSelector: (state: ReduxStore) => null | number | number[] | boolean;
  error?: string;
}

const MCQ: React.FC<Props> = ({
  numberOfCorrectOptions = 1,
  error = 'Please select an option to continue',
  ...props
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useReduxState(
    [],
    props.stateSelector,
    numberOfCorrectOptions,
  );

  return (
    <Layout image={props.image}>
      <div className="container px-xl-5 px-md-2 d-flex flex-column h-100">
        <ModuleTitle title={props.title} lapNumber={props.lapNumber} />

        <div className={styles.description}>{props.description}</div>
        <div
          className={`container ${
            styles.optionsBox
          } flex-grow-1 d-flex flex-column justify-content-center ${
            props.lapNumber !== 1 ? 'p-lg-4' : 'p-lg-5'
          } px-3 p-md-2`}>
          <div
            className={`row px-2 flex-grow-0 ${!props.question && 'd-none'}`}>
            <div
              className={`col-md-1 d-none d-md-block gx-0 ${
                !props.subquestionNumber && 'd-none'
              }`}>
              <div
                className={`${styles.subquestionNumber}  text-center p-0 p-md-2`}>
                {props.subquestionNumber}
              </div>
            </div>
            <div
              className={`col-md-11 pt-2 pt-sm-0 ${
                styles.question
              } d-flex align-items-center ${
                !props.subquestionNumber && 'pl-lg-5 pl-4'
              }`}>
              {props.question}
            </div>
          </div>
          <div
            className={`row flex-grow-0 justify-content-center px-4 ${styles.optionsWrapper}`}>
            {props.options.map((option, index) => (
              <div
                key={index}
                onClick={() => setSelectedOptions(index)}
                className={`
                col-md-${12 / props.optionsPerRow - 1} 
                d-flex justify-content-center align-items-center p-xl-4  
                ${styles.option} 
                ${selectedOptions.includes(index) ? styles.selected : ''}`}>
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <PrimaryButton
            error={error}
            attempted={selectedOptions.length === numberOfCorrectOptions}
            path={props.nextPath}>
            Next
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default MCQ;
