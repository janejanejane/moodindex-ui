
import { fromJS } from 'immutable';
import moodsPageReducer from '../reducer';

describe('moodsPageReducer', () => {
  it('returns the initial state', () => {
    expect(moodsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
