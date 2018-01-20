
import { fromJS } from 'immutable';
import mePageReducer from '../reducer';

describe('mePageReducer', () => {
  it('returns the initial state', () => {
    expect(mePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
