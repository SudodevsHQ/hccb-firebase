import React from 'react';
import style from './Introduction.module.scss';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const Introduction: React.FC<Props> = ({
  imageUrl,
  title,
  description,
}: Props) => {
  return (
    <Layout image={imageUrl}>
      <div className={style.wrapper}>
        <h1 className={style.title}>{title}</h1>
        <br></br>
        {description}
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
