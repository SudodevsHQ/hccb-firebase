import moduleOneReducer from '../reducers/moduleOneReducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  moduleOne: moduleOneReducer,
});

export default () => {
  const store = createStore(rootReducer);
  return store;
};
