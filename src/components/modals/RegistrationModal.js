import React from 'react';

import {Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import ModalDismissable from '../ModalDismissable';

class RegistrationModal extends React.Component {

  render() {
    return (
      <ModalDismissable>
        <h1>Registration</h1>

        <p className="lead">Already a member? Please <a href="login">log in</a> instead.</p>

        <form>
          <FormGroup controlId='formValidationSuccess1' validationState='success'>
            <ControlLabel>Email</ControlLabel>
            <FormControl type='text' />
            <HelpBlock>Help text with validation state.</HelpBlock>
          </FormGroup>

          <FormGroup controlId='formValidationSuccess1' validationState='success'>
            <ControlLabel>Password</ControlLabel>
            <FormControl type='text' />
            <HelpBlock>Help text with validation state.</HelpBlock>
          </FormGroup>

          <FormGroup controlId='formValidationSuccess1' validationState='success'>
            <ControlLabel>Password confirmation</ControlLabel>
            <FormControl type='text' />
            <HelpBlock>Help text with validation state.</HelpBlock>
          </FormGroup>

          <Button type="submit">Regiser</Button>
        </form>

      </ModalDismissable>
    )
  }
}

export default RegistrationModal
