/* eslint-disable  @typescript-eslint/no-explicit-any */
import moduleOneReducer from '../reducers/moduleOneReducer';
import { combineReducers, createStore, Store, CombinedState } from 'redux';
import { ReduxStore } from '../../interfaces/reduxStore';
import { moduleOneActionTypes } from '../../interfaces/moduleOneAction.types';

const rootReducer = combineReducers({
  moduleOne: moduleOneReducer,
});
export default (): Store<CombinedState<ReduxStore>, moduleOneActionTypes> => {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
