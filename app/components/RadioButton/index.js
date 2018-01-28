/**
*
* RadioButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function RadioButton(props) {
  const { type } = props;

  return (
    <div>
      <input id={type} name="mood" type="radio" />
      <label htmlFor={type}>{type}</label>
    </div>
  );
}

RadioButton.propTypes = {
  type: PropTypes.string,
};

export default RadioButton;
