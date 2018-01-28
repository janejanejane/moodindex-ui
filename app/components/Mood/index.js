/**
*
* Mood
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from 'components/RadioButton';

function Mood(props) {
  const { type } = props;
  return (
    <RadioButton type={type}>
      {type}
    </RadioButton>
  );
}

Mood.propTypes = {
  type: PropTypes.string,
};

export default Mood;
