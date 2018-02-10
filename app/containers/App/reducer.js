/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';

import {
  MOOD_POST,
  MOOD_POST_SUCCESS,
  MOOD_POST_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  me: null,
  currentMood: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case MOOD_POST:
      return state
        .set('loading', true)
        .set('error', false);
    case MOOD_POST_SUCCESS:
      return state
        .set('loading', false)
        .set('currentMood', action.mood);
    case MOOD_POST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
