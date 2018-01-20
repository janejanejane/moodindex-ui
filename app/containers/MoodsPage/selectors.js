import { createSelector } from 'reselect';

/**
 * Direct selector to the moodsPage state domain
 */
const selectMoodsPageDomain = (state) => state.get('moodsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MoodsPage
 */

const makeSelectMoodsPage = () => createSelector(
  selectMoodsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMoodsPage;
export {
  selectMoodsPageDomain,
};
