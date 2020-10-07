/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionBuilderMap } from '../modules/Module-1/utils/data';
import { ReduxStore } from '../interfaces/reduxStore';

export const useReduxState = (
  initialState: number[],
  selector: (state: any) => any,
  numberOfCorrectOptions: number,
): [number[], (options: number) => void] => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    initialState,
  );

  const previousState = useSelector<ReduxStore>(selector);
  const dispatch = useDispatch();

  const actionBuilder: any = selector(actionBuilderMap);

  function populateReduxAndSetState(option: number) {
    if (
      numberOfCorrectOptions > 1 &&
      selectedOptions.length < numberOfCorrectOptions &&
      Array.isArray(previousState)
    ) {
      setSelectedOptions((prevState) => [...prevState, option]);
      dispatch(actionBuilder([...previousState, option]));
    } else {
      setSelectedOptions([option]);
      if (Array.isArray(previousState)) {
        dispatch(actionBuilder([option]));
      } else {
        dispatch(actionBuilder(option));
      }
    }
  }

  return [selectedOptions, populateReduxAndSetState];
};
