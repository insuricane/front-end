import React from 'react';

import Form from './Form';

const center = {
  textAlign: 'center',
};

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <div className="home">
          <div style={center}>
            <h1>Insuricane</h1>
            <p>An emergency short-term home insurance product for hurricanes</p>
          </div>
          <Form />
          <iframe
            title="docusign"
            src="https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=9f86f5d1-8901-415f-aff2-7e939e05815b&v=2&Policyholder_UserName=James%20Xue&Policyholder_Email=jamesxue@seas.upenn.edu&env=demo"
            width="100%"
            height="500"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
