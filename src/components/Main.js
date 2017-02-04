require('normalize.css/normalize.css');
require('styles/App.css');

import TopNav from './TopNav';
import SidePanel from './SidePanel';
import EditPane from './EditPane';
import ComponentButtonGroup from './ComponentButtonGroup';
import AlertDismissable from './AlertDismissable';
import ModalDismissable from './ModalDismissable';

import {Grid, Row, Col} from 'react-bootstrap';

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

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
              <AlertDismissable />
              <ModalDismissable />

              <img src={yeomanImage} alt='Yeoman Generator'/>
              <div className='notice'>Please edit <code>src/components/Main.js</code> to get started!</div>
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
