import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Joi from 'joi-browser';
import { Button, Form } from 'reactstrap';

import FormComponent from '../Common/FormComponent';
import modal from '../../../services/modalService';
import user from '../../../services/userService';
import auth from '../../../services/authService';
import http from '../../../services/httpService';

import 'assets/scss/forms.styles.scss';

class RegistrationForm extends FormComponent {
  state = {
    data: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {}
  };

  schema = {
    userName: Joi.string().required().label('Username'),
    email: Joi.string()
      .required()
      .label('Email Address')
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .regex(new RegExp(this.passwordPattern))
      .required()
      .label('Password'),
    confirmPassword: Joi.any().equal(Joi.ref('password')).required()
  };

  doSubmit = async () => {
    try {
      const { token, message } = await user.register(this.state.data);
      auth.loginWithJwt(token);
      modal.success(message);
      setTimeout(() => (window.location = '/admin'), 300);
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
      // modal.error(error.message, 'Something happened!');
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <p className="text-center text-muted mb-5">Access your dashboard</p>
        <Form onSubmit={this.handleSubmit} className="registration">
          {this.renderInput('userName', 'Username')}
          {this.renderInput('email', 'Email Address', 'email')}
          {this.renderPasswordInput('password', 'Password')}
          {this.renderPasswordInput('confirmPassword', 'Confirm Password')}
          <Button
            type="submit"
            color="primary"
            className={loading ? 'onload' : null}
            block
          >
            {loading ? (
              <span>
                <i className="fas fa-circle-o-notch fa-spin"></i> LOADING
              </span>
            ) : (
              'CREATE ACCOUNT'
            )}
          </Button>
        </Form>
        <p className="text-muted text-center mt-4">
          Already have an account?
          <Link to="/login"> Sign In</Link>
        </p>
      </>
    );
  }
}

export default withRouter(RegistrationForm);
