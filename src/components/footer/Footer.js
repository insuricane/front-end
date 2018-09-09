import React from 'react';

import Container from '../shared/Container';

const footerStyles = {
  width: '100%',
  padding: '1rem 0rem',
};

const textStyles = {
  textAlign: 'center',
  color: '#C0C0C0',
  fontSize: '0.8rem',
  marginBottom: '0.5rem',
};

const Footer = () => (
  <Container>
    <footer style={footerStyles}>
      <p style={textStyles}>
        Insuricane &copy; 2018. PennApps F18 submission.
      </p>
      <p style={textStyles}>
        Developed by Andrew Cui, Cameron Cabo, Jacob Beckerman, and Jimmy Xue.
      </p>
    </footer>
  </Container>
);

export default Footer;
