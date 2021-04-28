import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import 'assets/scss/forms.styles.scss';

class LoginForm extends Component {
  static displayName = LoginForm.name;
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validate: {
        emailState: '',
        isValid: false,
        password: '',
        isValidPassword: false
      },
      showPassword: false,
      loading: false
    };
  }

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleChange = event => {
    const { name, value } = event.target;
    const { validate } = this.state;
    if (!value) {
      validate.emailState = '';
      validate.isValid = false;
      this.setState({
        validate,
        formText: 'Your username is most likely your email address'
      });
    }
    this.setState({
      [name]: value,
      formText: ''
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, loading } = this.state;
    this.setState({ loading: !loading });
    try {
      const response = await fetch(
        'https://localhost:44333/api/accounts/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      );
      const backendResponse = await response.json();
      console.log(backendResponse);
      if (backendResponse.success) {
        swal(backendResponse.message, 'success');
        setTimeout(() => this.props.history.push('/admin/index'), 2000);
      } else {
        this.setState({ loading: false }, () => swal(backendResponse.message));
      }
    } catch (error) {
      this.setState({ loading: false }, () =>
        swal(error.message, 'Something happened!', 'error')
      );
      console.log(error);
    }
  };

  render() {
    const { email, validate, password, showPassword, loading } = this.state;

    return (
      <>
        <p className="text-muted text-center mb-5">
          Don't have an account yet? <Link to="/register"> Sign Up</Link>
        </p>
        <Form className="login" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              title="Email Address"
              autoComplete="username"
              required
              autoFocus
              value={email}
              valid={validate.emailState === 'has-success'}
              invalid={validate.emailState === 'has-danger'}
              onChange={e => this.handleChange(e)}
            />
            <Label htmlFor="email" className="label">
              Email Address
            </Label>
            <FormFeedback>Invalid Email Address</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Button
              id="toggle-password"
              type="button"
              onClick={this.togglePassword}
              aria-label={
                showPassword
                  ? 'Hide password.'
                  : 'Show password as plain text. Warning: this will display your password on the screen.'
              }
            >
              {showPassword ? 'Hide' : 'Show'} password
            </Button>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              title="Password"
              autoComplete="current-password"
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}\|'.<>;:,/]).{8,33}$"
              required
              value={password}
              valid={validate.password === 'has-success'}
              invalid={validate.password === 'has-danger'}
              onChange={e => this.handleChange(e)}
            />
            <Label htmlFor="current-password" className="label">
              Password
            </Label>
            <FormFeedback>Invalid Password</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Button
              type="submit"
              id="sign-in"
              color="primary"
              className={loading ? 'onload' : null}
              block
            >
              {loading ? (
                <span>
                  <i className="fas fa-circle-o-notch fa-spin"></i> LOADING
                </span>
              ) : (
                'LOG IN'
              )}
            </Button>
          </FormGroup>
        </Form>
        <div className="d-grid gap-2 mt-4 text-center">
          <Link to="/resetPassword" className="forgot-text">
            Forgot password?
          </Link>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
