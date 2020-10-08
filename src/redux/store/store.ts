/* eslint-disable  @typescript-eslint/no-explicit-any */
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web

import moduleOneReducer from '../reducers/moduleOneReducer';
import miscReducer from '../reducers/miscReducer';

const rootReducer = combineReducers({
  moduleOne: moduleOneReducer,
  misc: miscReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// TODO: Remove eslint disable

//eslint-disable-next-line
export default () => {
  const store = createStore(
    persistedReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
