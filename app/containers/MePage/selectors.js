import { createSelector } from 'reselect';

/**
 * Direct selector to the mePage state domain
 */
const selectMePageDomain = (state) => state.get('mePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MePage
 */

const makeSelectMePage = () => createSelector(
  selectMePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMePage;
export {
  selectMePageDomain,
};
