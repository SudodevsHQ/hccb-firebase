import { SetCurrentLapNumber, SetAudioState } from '../actions/miscActions';

export interface MiscState {
  currentLap: number;
  playing: boolean;
}

export const miscDefaultState: MiscState = {
  currentLap: 0,
  playing: false,
};

const miscReducer = (
  state = miscDefaultState,
  action: SetCurrentLapNumber | SetAudioState,
): MiscState => {
  switch (action.type) {
    case 'SET_CURRENT_LAP_NUMBER':
      return {
        ...state,
        currentLap: (action as SetCurrentLapNumber).lapNumber,
      };

    case 'SET_AUDIO_STATE':
      return {
        ...state,
        playing: (action as SetAudioState).playing,
      };

    default:
      return state;
  }
};

export default miscReducer;
