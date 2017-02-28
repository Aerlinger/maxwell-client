import React from 'react';

import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {CardText} from 'material-ui/Card';
import {Link} from 'react-router';

const customContentStyle = {
  width: '300px',
  maxWidth: 'none'
};

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <form action="/" onSubmit={onSubmit}>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
            floatingLabelText="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
        />
      </div>


      <div className="button-line">
        <RaisedButton fullWidth={true} type="submit" label="Create New Account" primary/>
      </div>

      <CardText>
        Already have an account? <Link to={'/login'}>Log in</Link>
      </CardText>
    </form>
);

class SignUpModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = this.state.user.email;
    const password = encodeURIComponent(this.state.user.password);
    // const formData = `name=${name}&email=${email}&password=${password}`;

    const formData = {name, email, password};

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        // make a redirect
        this.context.router.replace('/login');
      } else {
        // failure
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });

    xhr.send(JSON.stringify(formData));
  }

  render() {
    const actions = [
      <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.props.closeModal}
      />,
      <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.props.closeModal}
      />
    ];

    return (
        <div>
          <Dialog
              contentStyle={customContentStyle}
              title="Sign Up"
              actions={actions}
              modal={false}
              open={this.props.open}
              onRequestClose={this.props.closeModal}
          >

            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
            <Divider />

          </Dialog>
        </div>
    );
  }
}

SignUpModal.defaultProps = {};

export default SignUpModal;
