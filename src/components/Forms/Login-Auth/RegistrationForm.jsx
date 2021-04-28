import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';

import {
  Label,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Input
} from 'reactstrap';

import 'assets/scss/forms.styles.scss';

class RegistrationForm extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {},
    showPassword: false,
    showConfirmPassword: false,
    loading: false
  };

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  toggleConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({ showConfirmPassword: !showConfirmPassword });
  };

  // handle data fields state change
  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    });
  };

  validate = () => {
    const {
      data: { password, confirmPassword },
      errors
    } = this.state;

    if (password.length < 8 || password.length > 32)
      errors.password = 'Password must be 8 - 32 characters long.';

    if (confirmPassword !== password)
      errors.confirmPassword = 'Passwords must match.';

    return errors;
  };

  handleOnBlurEmail = () => {
    const {
      data: { email, username },
      errors
    } = this.state;

    if (email === '') errors.email = 'Email cannot be blank';
    if (username === email)
      errors.username = 'Username cannot the same as your Email Address';

    if (!errors.email && !errors.username) {
      errors.emailState = 'valid';
      errors.usernameState = 'valid';
      this.setState({ errors });
    } else this.setState({ errors });
  };

  handleOnBlurPassword = () => {
    const {
      data: { password, confirmPassword },
      errors
    } = this.state;
    if (password.length < 8 || password.length > 32)
      errors.password = 'Password must be 8 - 32 characters long.';

    if (
      !password.match(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}\\|'.<>;:,/]).{8,33}$"
      )
    )
      errors.password =
        'Password must be contain at least one lowercase and uppercase letter, a number and a special character';

    if (confirmPassword !== password)
      errors.confirmPassword = 'Passwords must match.';

    if (!errors.password) {
      errors.passwordState = 'valid';
      this.setState({ errors });
      if (!errors.confirmPassword) errors.confirmPasswordState = 'valid';
    } else this.setState({ errors });
  };

  postUserToDb = async () => {
    const {
      data: { username, email, password, confirmPassword }
    } = this.state;
    try {
      const response = await fetch(
        'https://localhost:44333/api/accounts/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            userName: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
          })
        }
      );
      const backendResponse = await response.json();
      console.log(backendResponse);

      if (backendResponse.success) {
        swal(backendResponse.message, 'Success', 'success');
        setTimeout(() => this.props.history.push('/admin/index'), 2000);
      } else {
        swal(backendResponse.message);
        switch (backendResponse.message) {
          case 'That user already exists':
            swal(backendResponse.message, 'Proceed to Login', 'warning');
            this.props.history.push('/login');
            break;

          default:
            swal(backendResponse.message);
            break;
        }
      }
    } catch (error) {
      swal(error.message, 'Something happened!', 'error');
      console.log(error);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const formErrors = this.validate();
    const {
      errors: { usernameState, emailState, confirmPasswordState },
      loading
    } = this.state;

    if (emailState && confirmPasswordState && usernameState)
      this.setState({ loading: !loading }, () => this.postUserToDb());
    else this.setState({ formErrors });
  };

  render() {
    const {
      data,
      errors,
      showPassword,
      showConfirmPassword,
      loading
    } = this.state;

    return (
      <>
        <p className="text-center text-muted mb-5">Access your dashboard</p>
        <Form onSubmit={this.handleSubmit} className="registration">
          <FormGroup>
            <Input
              id="username"
              name="username"
              type="text"
              className={errors.username ? 'has-danger' : null}
              autoFocus
              required
              valid={errors.usernameState === 'valid' ? true : false}
              invalid={errors.username ? true : false}
              value={data.username}
              onChange={e => this.handleChange(e)}
            />
            <Label htmlFor="username" className="label">
              Enter Username
            </Label>
            <FormFeedback>{errors.username}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className={errors.email ? 'has-danger' : null}
              required
              valid={errors.emailState === 'valid' ? true : false}
              invalid={errors.email ? true : false}
              value={data.email}
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurEmail(e)}
            />
            <Label htmlFor="email" className="label">
              Enter Email Address
            </Label>
            <FormFeedback>{errors.email}</FormFeedback>
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
              id="password"
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              title="Enter a password that's 8 - 32 characters long, with at least one lowercase and uppercase letter, a number and a special character"
              aria-describedby="password-constraints"
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}\|'.<>;:,/]).{8,33}$"
              value={data.password}
              required
              valid={errors.passwordState === 'valid' ? true : false}
              invalid={errors.password ? true : false}
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurPassword(e)}
            />
            <Label htmlFor="password" className="label">
              Enter Password
            </Label>
            <FormText
              id="password-constraints"
              className={errors.password ? 'text-red' : null}
            >
              8 - 32 characters long, with at least one lowercase and uppercase
              letter, a number and a special character
            </FormText>
          </FormGroup>

          <FormGroup>
            <Button
              id="toggle-confirm-password"
              type="button"
              onClick={this.toggleConfirmPassword}
              aria-label={
                showConfirmPassword
                  ? 'Hide password.'
                  : 'Show password as plain text. Warning: this will display your password on the screen.'
              }
            >
              {showConfirmPassword ? 'Hide' : 'Show'} password
            </Button>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="confirm"
              required
              value={data.confirmPassword}
              valid={errors.confirmPasswordState === 'valid' ? true : false}
              invalid={errors.confirmPassword ? true : false}
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurPassword(e)}
            />
            <Label htmlFor="confirmPassword" className="label">
              Confirm Password
            </Label>
            <FormFeedback>{errors.confirmPassword}</FormFeedback>
          </FormGroup>
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
