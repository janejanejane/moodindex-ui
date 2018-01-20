/**
*
* Mood
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import A from 'components/A';

function Mood(props) {
  const { type, ...others } = props;
  return (
    <A {...others}>
      {type}
    </A>
  );
}

Mood.propTypes = {
  type: PropTypes.string,
};

export default Mood;
