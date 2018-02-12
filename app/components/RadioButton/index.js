/**
*
* RadioButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function RadioButton(props) {
  const { type, value, onChange } = props;

  return (
    <div>
      <input id={type} name="mood" type="radio" value={value} onChange={onChange} />
      <label htmlFor={type}>{type}</label>
    </div>
  );
}

RadioButton.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default RadioButton;
