require('normalize.css/normalize.css');

import ButtonStyle from '../styles/ComponentButton.css';

import * as Bootstrap from 'react-bootstrap';

let TransformerImage = require('../images/Transformer2.png');
import React from 'react';

class EditPane extends React.Component {
  hotkey() {
    if (this.props.hotkey) {
      return <span className={ButtonStyle.hotkey}>{this.props.hotkey}</span>
    }
  }

  render() {
    return (
        <form style={{background: '#EEE'}}>
          <img src={TransformerImage} width='60px' height='60px'/>
          <h4>Transformer</h4>
          <hr />

          <Bootstrap.FormGroup controlId='formValidationSuccess1' validationState='success'>
            <Bootstrap.ControlLabel>Input with success</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
            <Bootstrap.HelpBlock>Help text with validation state.</Bootstrap.HelpBlock>
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationWarning1' validationState='warning'>
            <Bootstrap.ControlLabel>Input with warning</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationError1' validationState='error'>
            <Bootstrap.ControlLabel>Input with error</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationNull' validationState={null}>
            <Bootstrap.ControlLabel>Input with no validation state</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationSuccess2' validationState='success'>
            <Bootstrap.ControlLabel>Input with success and feedback icon</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
            <Bootstrap.FormControl.Feedback />
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationWarning2' validationState='warning'>
            <Bootstrap.ControlLabel>Input with warning and feedback icon</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
            <Bootstrap.FormControl.Feedback />
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationError2' validationState='error'>
            <Bootstrap.ControlLabel>Input with error and feedback icon</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
            <Bootstrap.FormControl.Feedback />
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationSuccess3' validationState='success'>
            <Bootstrap.ControlLabel>Input with success and custom feedback icon</Bootstrap.ControlLabel>
            <Bootstrap.FormControl type='text' />
            <Bootstrap.FormControl.Feedback>
              <Bootstrap.Glyphicon glyph='music' />
            </Bootstrap.FormControl.Feedback>
          </Bootstrap.FormGroup>

          <Bootstrap.FormGroup controlId='formValidationWarning3' validationState='warning'>
            <Bootstrap.ControlLabel>Input group with warning</Bootstrap.ControlLabel>
            <Bootstrap.InputGroup>
              <Bootstrap.InputGroup.Addon>@</Bootstrap.InputGroup.Addon>
              <Bootstrap.FormControl type='text' />
            </Bootstrap.InputGroup>
            <Bootstrap.FormControl.Feedback />
          </Bootstrap.FormGroup>

          <Bootstrap.Form componentClass='fieldset' horizontal>
            <Bootstrap.FormGroup controlId='formValidationError3' validationState='error'>
              <Bootstrap.Col componentClass={Bootstrap.ControlLabel} xs={3}>
                Input with error
              </Bootstrap.Col>
              <Bootstrap.Col xs={9}>
                <Bootstrap.FormControl type='text' />
                <Bootstrap.FormControl.Feedback />
              </Bootstrap.Col>
            </Bootstrap.FormGroup>

            <Bootstrap.FormGroup controlId='formValidationSuccess4' validationState='success'>
              <Bootstrap.Col componentClass={Bootstrap.ControlLabel} xs={3}>
                Input group with success
              </Bootstrap.Col>
              <Bootstrap.Col xs={9}>
                <Bootstrap.InputGroup>
                  <Bootstrap.InputGroup.Addon>@</Bootstrap.InputGroup.Addon>
                  <Bootstrap.FormControl type='text' />
                </Bootstrap.InputGroup>
                <Bootstrap.FormControl.Feedback />
              </Bootstrap.Col>
            </Bootstrap.FormGroup>
          </Bootstrap.Form>

          <Bootstrap.Form componentClass='fieldset' inline>
            <Bootstrap.FormGroup controlId='formValidationWarning4' validationState='warning'>
              <Bootstrap.ControlLabel>Input with warning</Bootstrap.ControlLabel>
              {' '}
              <Bootstrap.FormControl type='text' />
              <Bootstrap.FormControl.Feedback />
            </Bootstrap.FormGroup>
            {' '}
            <Bootstrap.FormGroup controlId='formValidationError4' validationState='error'>
              <Bootstrap.ControlLabel>Input group with error</Bootstrap.ControlLabel>
              {' '}
              <Bootstrap.InputGroup>
                <Bootstrap.InputGroup.Addon>@</Bootstrap.InputGroup.Addon>
                <Bootstrap.FormControl type='text' />
              </Bootstrap.InputGroup>
              <Bootstrap.FormControl.Feedback />
            </Bootstrap.FormGroup>
          </Bootstrap.Form>

          <Bootstrap.Checkbox validationState='success'>
            Checkbox with success
          </Bootstrap.Checkbox>
          <Bootstrap.Radio validationState='warning'>
            Radio with warning
          </Bootstrap.Radio>
          <Bootstrap.Checkbox validationState='error'>
            Checkbox with error
          </Bootstrap.Checkbox>

          {/* This requires React 15's <span>-less spaces to be exactly correct. */}
          <Bootstrap.FormGroup validationState='success'>
            <Bootstrap.Checkbox inline>
              Checkbox
            </Bootstrap.Checkbox>
            {' '}
            <Bootstrap.Checkbox inline>
              with
            </Bootstrap.Checkbox>
            {' '}
            <Bootstrap.Checkbox inline>
              success
            </Bootstrap.Checkbox>
          </Bootstrap.FormGroup>

          <Bootstrap.Button type='submit'>
            Sign in
          </Bootstrap.Button>
        </form>
    );
  }
}

EditPane.defaultProps = {};

export default EditPane;
