import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import Container from '../shared/Container';

const Accept = ({ location, assetsValue, firstName, lastName, email }) => {
  if (!(location && location.lat && location.lng)) {
    return (<Redirect to="/" />);
  }

  return (
    <Container>
      <iframe
        title="docusign"
        src={`https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=9f86f5d1-8901-415f-aff2-7e939e05815b&v=2&Policyholder_UserName=${firstName}%20${lastName}&Policyholder_Email=${email}&env=demo`}
        width="100%"
        height="500"
      />
    </Container>
  );
};

const mapStateToProps = ({ userState }) => ({
  firstName: userState.firstName,
  lastName: userState.lastName,
  email: userState.email,
  address: userState.address,
  location: userState.location,
  assetsValue: userState.assetsValue,
});

Accept.propTypes = {
  location: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number,
  }).isRequired,
  assetsValue: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
)(Accept);
