import React from 'react';
import { useSelector } from 'react-redux';
import ModuleResult from '../../../components/ModuleResult/ModuleResult';
import { ReduxStore } from '../../../interfaces/reduxStore';

const ModuleOneResults: React.FC = () => {
  const moduleResultData = useSelector(
    (state: ReduxStore) => state.moduleOne.moduleResult,
  );
  return <ModuleResult data={moduleResultData} />;
};

export default ModuleOneResults;
