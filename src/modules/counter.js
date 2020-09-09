import { createAction, handleActions } from 'redux-actions';

// action
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action creator function
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// initialState
const initialState = 0;

// reducer
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
