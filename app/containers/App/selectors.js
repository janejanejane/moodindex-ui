import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectMe = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('me')
);

const makeSelectCurrentMood = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentMood')
);

export {
  makeSelectLocation,
  makeSelectError,
  makeSelectLoading,
  makeSelectMe,
  makeSelectCurrentMood,
};
