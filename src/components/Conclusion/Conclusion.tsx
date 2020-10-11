import React from 'react';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import Confetti from 'react-confetti';

import HeroCard from '../ContentCard/ContentCard';
import resultStyles from '../result/result.module.scss';
import styles from './Conclusion.module.scss';

import PrimaryButton from '../primaryButton/primaryButton';
import useGetDynamicRoute from '../../util/injectRoute';

interface Props {
  title: string;
  description: string;
  nextPath: string;
  downloadUrl: string;
}

const Conclusion: React.FC<Props> = (props: Props) => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      className={`${resultStyles.result} p-md-5 p-4 d-flex text-center justify-content-center`}>
      <Confetti width={width} height={height} />
      <HeroCard>
        <h1 className={`${styles.conclusionTitle}`}>{props.title}</h1>

        <img
          src={`/static/img/conclusion.svg`}
          alt="result-illustration"
          className="my-lg-4"
        />

        <div className={`${styles.description}`}>{props.description}</div>
        <div
          className={`d-flex justify-content-center my-md-2 flex-wrap ${styles.buttons}`}>
          <PrimaryButton
            attempted={true}
            path={useGetDynamicRoute(props.nextPath)}>
            See Results for all Laps
          </PrimaryButton>
          <PrimaryButton
            attempted={true}
            path={useGetDynamicRoute(props.downloadUrl)}>
            Download Results
          </PrimaryButton>
        </div>
      </HeroCard>
    </div>
  );
};

export default Conclusion;
