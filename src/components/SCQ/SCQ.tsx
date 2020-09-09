// Single Choice/Component Question

import React from 'react';

import Layout from '../layout/Layout';
import MCQStyles from '../MCQ/MCQ.module.scss';
import styles from './SCQ.module.scss';
import PrimaryButton from '../primaryButton/primaryButton';
import ModuleTitle from '../moduleTitle/moduleTitle';

interface Props {
  lapNumber: number;
  title: string;
  description?: React.ReactNode;
  question?: React.ReactNode;
  children: React.ReactNode;
  subquestionNumber?: string;
  nextPath: string;
  image: 'graph' | 'dashboard' | 'man' | 'puzzle' | 'presentation';
}

const SCQ: React.FC<Props> = (props: Props) => {
  return (
    <Layout image={props.image}>
      <div className="container px-xl-5 px-md-2">
        <ModuleTitle title={props.title} lapNumber={props.lapNumber} />

        <div className={MCQStyles.description}>{props.description}</div>
        <div className={`container ${MCQStyles.optionsBox} p-lg-4 p-1 p-md-2`}>
          <div className={`row ${!props.question && 'd-none'}`}>
            <div
              className={`col-md-1 gx-0 ${
                !props.subquestionNumber && 'd-none'
              }`}>
              <div
                className={`${MCQStyles.subquestionNumber}  text-center p-2`}>
                {props.subquestionNumber}
              </div>
            </div>
            <div
              className={`col-md-11 ${
                MCQStyles.question
              } d-flex align-items-center ${
                !props.subquestionNumber && 'pl-lg-5 pl-4'
              }`}>
              {props.question}
            </div>
          </div>
          <div
            className={`row justify-content-center px-md-4 ${styles.childWrapper} `}>
            {props.children}
          </div>
        </div>
        <div className="">
          <PrimaryButton attempted={true} path={props.nextPath}>
            Next
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default SCQ;
