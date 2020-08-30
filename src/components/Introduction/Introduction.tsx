import React from 'react';
import style from './Introduction.module.scss';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Introduction: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <Layout image="quiz">
      <div className={style.wrapper}>
        <h1 className={style.title}>{title}</h1>
        <br></br>
        {children}
        <div className="d-flex justify-content-center">
          <Link to="/module/1/lap/1" className={`btn m-5 ${style.startLap1}`}>
            Start Lap 1 &#8594;
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Introduction;
