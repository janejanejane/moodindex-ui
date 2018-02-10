import 'whatwg-fetch';

import { call, put, takeLatest } from 'redux-saga/effects';
import { moodSubmitError, moodSubmitSuccess } from '../App/actions';
import { MOOD_POST } from '../App/constants';

// Individual exports for testing
export function* postMood({ mood }) {
  console.log('postMood called!!!');
  try {
    const postMoodResponse = yield call(submitCurrentMood, mood);
    console.log('postMoodResponse:', postMoodResponse);
    yield put(moodSubmitSuccess(postMoodResponse));
  } catch (err) {
    yield put(moodSubmitError(err));
  }
}

export default function* moodSubmission() {
  console.log('moodSubmission called!!!');
  yield takeLatest(MOOD_POST, postMood);
}


const submitCurrentMood = (mood) => {
  console.log('submitMood called!!!', mood);
  const postUrl = 'http://localhost:3000/api/v1/moodPost';
  return fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: mood,
    }),
  })
  .then((res) => res.json());
};
