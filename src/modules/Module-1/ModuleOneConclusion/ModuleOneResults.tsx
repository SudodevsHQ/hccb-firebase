import React from 'react';
import { useSelector } from 'react-redux';
import ModuleResult from '../../../components/ModuleResult/ModuleResult';
import useModuleOneFeedback from '../../../hooks/useModuleOneFeedback';
import { ReduxStore } from '../../../interfaces/reduxStore';

const ModuleOneResults: React.FC = () => {
  const moduleResultData = useSelector(
    (state: ReduxStore) => state.moduleOne.moduleResult,
  );

  const moduleOneFeedback = useModuleOneFeedback();
  console.log(moduleOneFeedback);

  return <ModuleResult data={moduleResultData} feedback={moduleOneFeedback} />;
};

export default ModuleOneResults;
