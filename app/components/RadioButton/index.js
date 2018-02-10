/**
*
* RadioButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function RadioButton(props) {
  const { type, value } = props;

  return (
    <div>
      <input id={type} name="mood" type="radio" value={value} />
      <label htmlFor={type}>{type}</label>
    </div>
  );
}

RadioButton.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

export default RadioButton;
