import { useRouteMatch } from 'react-router-dom';

const useGetDynamicRoute = (suffix: string): string => {
  const { url } = useRouteMatch();
  const prefix = url.split('/module')[0];
  console.log(`${prefix}${suffix}`);
  return `${prefix}${suffix}`;
};

export default useGetDynamicRoute;
