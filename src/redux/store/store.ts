import moduleOneReducer from '../reducers/moduleOneReducer';
import { combineReducers, createStore, Store, CombinedState } from 'redux';
import { moduleOneState } from '../../interfaces/moduleOneState';
import { moduleOneActionTypes } from '../../interfaces/moduleOneAction.types';

const rootReducer = combineReducers({
  moduleOne: moduleOneReducer,
});

export default (): Store<
  CombinedState<{
    moduleOne: moduleOneState;
  }>,
  moduleOneActionTypes
> => {
  const store = createStore(rootReducer);
  return store;
};
