import React from 'react';
import style from './Introduction.module.scss';
import Layout from '../layout/Layout';
import PrimaryButton from '../primaryButton/primaryButton';

interface Props {
  title: string;
  children: React.ReactNode;
  image: 'graph' | 'quiz' | 'dashboard' | 'man' | 'analysis';
  primaryButtonText: string;
  nextPath: string;
}

const Introduction: React.FC<Props> = ({
  title,
  children,
  image,
  primaryButtonText,
  nextPath,
}: Props) => {
  return (
    <Layout image={image}>
      <div className={`${style.wrapper} px-lg-4 d-flex flex-column `}>
        <h2 className={`${style.title} mb-3`}>{title}</h2>
        <div className={`${style.textWrapper} flex-grow-1`}>{children}</div>

        <PrimaryButton attempted={true} path={nextPath}>
          {primaryButtonText}
        </PrimaryButton>
      </div>
    </Layout>
  );
};

export default Introduction;
