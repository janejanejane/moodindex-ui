/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';

import Mood from 'components/Mood';
import SubmitButton from 'components/SubmitButton';
import messages from './messages';
import { submitMood } from '../App/actions';
import { makeSelectLoading, makeSelectError, makeSelectCurrentMood, makeSelectMe } from '../App/selectors';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onSubmitForm } = this.props;

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form onSubmit={onSubmitForm}>
          <Mood type="happy" value="1" />
          <Mood type="sad" value="2" />
          <Mood type="angry" value="3" />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitMood(1));
    },
  };
}

const mapsStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  currentMood: makeSelectCurrentMood(),
  me: makeSelectMe(),
});

const withConnect = connect(mapsStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
