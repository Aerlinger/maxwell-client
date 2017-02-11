require('normalize.css/normalize.css');
require('styles/App.css');

import TopNav from '../components/TopNav';
import SidePanel from '../components/SidePanel';
import EditPane from '../components/EditPane';
import ComponentButtonGroup from '../components/ComponentButtonGroup';
// import AlertDismissable from './AlertDismissable';
// import ModalDismissable from './ModalDismissable';
// import LoginModal from './modals/LoginModal';
// import RegistrationModal from './modals/RegistrationModal';
import SignUpForm from '../components/SignUpForm';
import CircuitToolbar from '../components/Toolbar';

import {Grid, Row, Col} from 'react-bootstrap';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        {/*<TopNav/>*/}
        <CircuitToolbar/>

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

              {/*<SignUpForm onSubmit={(e) => console.log('submitted')} onChange={(e) => console.log('changed')} errors={{ email: 'Invalid' }} user={{ email: 'jane@doe.com', name: 'Jane Doe' }}/>*/}
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
