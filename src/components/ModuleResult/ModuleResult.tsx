import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../interfaces/reduxStore';

import HeroCard from '../ContentCard/ContentCard';
import resultStyles from '../result/result.module.scss';

// interface Props {
// //   title: string;
// //   description: string;
//   nextPath: string;
// }

const ModuleResult: React.FC = () => {
  const moduleData = useSelector((state: ReduxStore) => state.moduleOne);
  console.log(moduleData);

  return (
    <div
      className={`${resultStyles.result} p-md-5 p-4 d-flex text-center justify-content-center`}>
      <HeroCard>result</HeroCard>
    </div>
  );
};

export default ModuleResult;
