import React from 'react';
import style from './Introduction.module.scss';
import Layout from '../layout/Layout';
import PrimaryButton from '../primaryButton/primaryButton';
import useGetDynamicRoute from '../../util/injectRoute';

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
        <div
          className={`${style.contentWrapper} h-100 d-flex flex-column justify-content-center`}>
          {children}
        </div>

        <PrimaryButton attempted={true} path={useGetDynamicRoute(nextPath)}>
          {primaryButtonText}
        </PrimaryButton>
      </div>
    </Layout>
  );
};

export default Introduction;
