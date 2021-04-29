import React from 'react';
import Joi from 'joi-browser';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label
} from 'reactstrap';

import FormComponent from '../Common/FormComponent';

import http from '../../../services/httpService';
import auth from '../../../services/authService';
import modal from '../../../services/modalService';

import 'assets/scss/forms.styles.scss';

class LoginForm extends FormComponent {
  state = {
    data: { email: '', password: '' },
    loading: false
  };

  schema = {
    email: Joi.string()
      .required()
      .label('Email Address')
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .required()
      .label('Password')
      .min(8)
      .max(32)
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}\\|'.<>;:,/]).{8,33}$/)
  };

  //     this.setState({
  //       validate,
  //       formText: 'Your username is most likely your email address'
  //   this.setState({
  //     [name]: value,
  //     formText: ''
  //   });
  // };

  doSubmit = async () => {
    try {
       this.setState({ loading: !this.state.loading });
       const { username, password } = this.state.data;
       await auth.login(username, password);
       const { state } = this.props.location;
       window.location = state ? state.from.pathname : '/admin';
    } catch (error) {
      if (http.expectedError(error, 400)) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
      modal.error(error.response.data);
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, loading } = this.state;
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
        modal.success(backendResponse.message);
        setTimeout(() => this.props.history.replace('/admin/index'), 2000);
      } else {
        this.setState({ loading: false }, () =>
          modal.warning(backendResponse.message)
        );
      }
    } catch (error) {
      this.setState({ loading: false });

      modal.error(error.message, 'It appears you are offline');

      console.log(error);
    }
  };

  render() {
    const { data, errors, loading } = this.state;
    
     if (auth.currentUser) return <Redirect to="/admin" />;

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
              placeholder="Email"
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
