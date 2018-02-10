/*
 *
 * App actions
 *
 */

import {
  MOOD_POST,
  MOOD_POST_SUCCESS,
  MOOD_POST_ERROR,
} from './constants';

export function submitMood(mood) {
  console.log('submitMood!!!', {
    type: MOOD_POST,
    mood,
  });
  return {
    type: MOOD_POST,
    mood,
  };
}

export function moodSubmitSuccess(res) {
  console.log('moodSubmitSuccess!!!', {
    type: MOOD_POST,
    res,
  });
  return {
    type: MOOD_POST_SUCCESS,
    mood: res.value,
  };
}

export function moodSubmitError(error) {
  return {
    type: MOOD_POST_ERROR,
    error,
  };
}
