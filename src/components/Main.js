require('normalize.css/normalize.css');
require('styles/App.css');
let mongoose = require( 'mongoose' );

import TopNav from './TopNav';
import SidePanel from './SidePanel';
import EditPane from './EditPane';
import ComponentButtonGroup from './ComponentButtonGroup';
// import AlertDismissable from './AlertDismissable';
// import ModalDismissable from './ModalDismissable';
// import LoginModal from './modals/LoginModal';
// import RegistrationModal from './modals/RegistrationModal';
import SignUpForm from './SignUpForm';

import {Grid, Row, Col} from 'react-bootstrap';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <TopNav/>

        <Grid fluid={true}>
          <Row>
            <Col sm={3} md={2} lg={2}>
              <ComponentButtonGroup />
              <SidePanel />
            </Col>

            <Col sm={6} md={8} lg={8}>
              {/*<AlertDismissable />*/}

              {/*<LoginModal />*/}
              {/*<RegistrationModal />*/}

              <SignUpForm onSubmit={(e) => console.log('submitted')} onChange={(e) => console.log('changed')} errors={{ email: 'Invalid' }} user={{ email: 'jane@doe.com', name: 'Jane Doe' }}
              />
            </Col>

            <Col sm={3} md={2} lg={2}>
              <EditPane />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
