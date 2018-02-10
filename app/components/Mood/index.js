/**
*
* Mood
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from 'components/RadioButton';

function Mood(props) {
  const { type, value } = props;
  return (
    <RadioButton type={type} value={value}>
      {type}
    </RadioButton>
  );
}

Mood.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Mood;
