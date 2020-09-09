export const setCurrentLapNumber = (
  lapNumber: number,
): SetCurrentLapNumber => ({
  type: 'SET_CURRENT_LAP_NUMBER',
  lapNumber,
});

export const setAudioState = (playing: boolean): SetAudioState => ({
  type: 'SET_AUDIO_STATE',
  playing,
});

export interface SetCurrentLapNumber {
  type: string;
  lapNumber: number;
}
export interface SetAudioState {
  type: string;
  playing: boolean;
}
