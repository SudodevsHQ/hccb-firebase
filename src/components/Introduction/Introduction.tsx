import React from 'react';
import style from './Introduction.module.scss';
import Layout from '../layout/Layout';
import PrimaryButton from '../primaryButton/primaryButton';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Introduction: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <Layout image="quiz">
      <div className={`${style.wrapper} px-lg-4`}>
        <h1 className={style.title}>{title}</h1>
        <br></br>
        {children}
        <PrimaryButton path="/module/1/lap/1a">Start Lap 1</PrimaryButton>
      </div>
    </Layout>
  );
};

export default Introduction;
