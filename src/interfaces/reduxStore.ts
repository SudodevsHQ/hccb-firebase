import { ModuleOneState } from './moduleOneState';
import { MiscState } from '../redux/reducers/miscReducer';

export interface ReduxStore {
  moduleOne: ModuleOneState;
  misc: MiscState;
}
