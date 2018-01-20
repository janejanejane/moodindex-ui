/**
 *
 * MePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>MePage</title>
          <meta name="description" content="Description of MePage" />
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}

MePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mepage: makeSelectMePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mePage', reducer });
const withSaga = injectSaga({ key: 'mePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MePage);
