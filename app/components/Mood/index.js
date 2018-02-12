/**
*
* Mood
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from 'components/RadioButton';

function Mood(props) {
  const { moods, onChange } = props;
  const moodSelection = moods.map(({ type, value }) => (
    <RadioButton key={value} type={type} value={value} onChange={onChange}>
      {type}
    </RadioButton>
  ));

  return (
    <div>
      {moodSelection}
    </div>
  );
}

Mood.propTypes = {
  moods: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.number,
  })),
  onChange: PropTypes.func,
};

export default Mood;
