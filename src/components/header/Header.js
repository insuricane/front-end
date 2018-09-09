import React from 'react';

import Container from '../shared/Container';

const headerStyles = {
  padding: '1rem 0rem',
  textAlign: 'center',
  borderBottom: '4px solid rgba(0, 0, 0, 0.1)',
  marginBottom: '1rem',
};

const textStyles = {
  marginBottom: '0',
};

const Header = () => (
  <Container>
    <div style={headerStyles}>
      <h1>Insuricane</h1>
      <p style={textStyles}>An emergency short-term home insurance product for hurricanes</p>
    </div>
  </Container>
);

export default Header;
