/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <header>
      <FormattedMessage {...messages.header} />
      <nav>
        <ul>
          <li><Link to="/me">Me</Link></li>
          <li><Link to="/moods">Moods</Link></li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
