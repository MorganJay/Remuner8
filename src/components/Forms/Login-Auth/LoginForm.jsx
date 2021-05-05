import React from 'react';
import Joi from 'joi-browser';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Button, Form, FormGroup } from 'reactstrap';

import FormComponent from '../Common/FormComponent';

import { AppContext } from './../../../context/store';
import http from '../../../services/httpService';
import auth from '../../../services/authService';
import modal from '../../../services/modalService';

import 'assets/scss/forms.styles.scss';

class LoginForm extends FormComponent {
  static contextType = AppContext;
  currentUser = auth.currentUser;
  state = {
    data: { email: '', password: '' },
    errors: {},
    loading: false
  };

  schema = {
    email: Joi.string().required().label('Email Address'),
    password: Joi.string().required().label('Password')
  };

  doSubmit = async () => {
    const { state } = this.props.location;
    const { email, password } = this.state.data;
    const { setUsername } = this.context.events;
    try {
      this.setState({ loading: !this.state.loading });
      const username = await auth.login(email, password);
      await setUsername(username);
      window.location = state ? state.from.pathname : '/admin';
    } catch (error) {
      this.setState({ loading: false });
      if (!error.response) return;

      if (http.expectedError(error, 400)) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data.errors.pop();
        this.setState({ errors });
      }

      if (http.expectedError(error, 404))
        return modal.error('Failed to fetch', 'Not found');

      Array.isArray(error.response.data.errors) &&
        modal.error(...error.response.data.errors);
    }
  };

  render() {
    if (this.currentUser) return <Redirect to="/admin" />;
    const { loading } = this.state;

    return (
      <>
        <p className="text-muted text-center mb-5">
          Don't have an account yet? <Link to="/register"> Sign Up</Link>
        </p>
        <Form className="login" onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email Address', 'email')}
          {this.renderPasswordInput('password', 'Password')}
          <FormGroup>
            <Button
              type="submit"
              id="sign-in"
              color="primary"
              className={loading ? 'onload' : ''}
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
