/* eslint-disable  @typescript-eslint/no-explicit-any */
import moduleOneReducer from '../reducers/moduleOneReducer';
import { combineReducers, createStore } from 'redux';
import miscReducer from '../reducers/miscReducer';

const rootReducer = combineReducers({
  moduleOne: moduleOneReducer,
  misc: miscReducer,
});

// TODO: Remove eslint disable

//eslint-disable-next-line
export default () => {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
