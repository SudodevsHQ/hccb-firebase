// Multiple-Choice Question Component

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
  numberOfCorrectOptions?: number;
  nextPath: string;
  optionsPerRow: number;
  image: 'graph' | 'dashboard' | 'man' | 'puzzle';
}

const handleOptionSelect = (
  index: number,
  numberOfCorrectOptions: number,
  selectedOptions: number[],
  setSelectedOptions: React.Dispatch<React.SetStateAction<number[]>>,
) => {
  if (
    numberOfCorrectOptions > 1 &&
    selectedOptions.length < numberOfCorrectOptions
  )
    setSelectedOptions((prevState) => [...prevState, index]);
  else setSelectedOptions(() => [index]);
};

const MCQ: React.FC<Props> = ({
  numberOfCorrectOptions = 1,
  ...props
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  return (
    <Layout image={props.image}>
      <div className="container px-xl-5 px-md-2">
        <ModuleTitle title={props.title} lapNumber={props.lapNumber} />

        <div className={styles.description}>{props.description}</div>
        <div
          className={`container ${styles.optionsBox} ${
            props.lapNumber !== 1 ? 'p-lg-4' : 'p-lg-5'
          } p-1 p-md-2`}>
          <div className={`row ${!props.question && 'd-none'}`}>
            <div
              className={`col-md-1 gx-0 ${
                !props.subquestionNumber && 'd-none'
              }`}>
              <div className={`${styles.subquestionNumber}  text-center p-2`}>
                {props.subquestionNumber}
              </div>
            </div>
            <div
              className={`col-md-11 ${
                styles.question
              } d-flex align-items-center ${
                !props.subquestionNumber && 'pl-lg-5 pl-4'
              }`}>
              {props.question}
            </div>
          </div>
          <div
            className={`row justify-content-center px-md-4 ${styles.optionsWrapper}`}>
            {props.options.map((option, index) => (
              <div
                key={index}
                onClick={() =>
                  handleOptionSelect(
                    index,
                    numberOfCorrectOptions,
                    selectedOptions,
                    setSelectedOptions,
                  )
                }
                className={`
                col-md-${12 / props.optionsPerRow - 1} 
                d-flex justify-content-center align-items-center p-4  
                ${styles.option} 
                ${selectedOptions.includes(index) ? styles.selected : ''}`}>
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <PrimaryButton
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
