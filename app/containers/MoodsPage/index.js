/**
 *
 * MoodsPage
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
import makeSelectMoodsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MoodsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>MoodsPage</title>
          <meta name="description" content="Description of MoodsPage" />
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}

MoodsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  moodspage: makeSelectMoodsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'moodsPage', reducer });
const withSaga = injectSaga({ key: 'moodsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MoodsPage);
