import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { TextField } from '../../Forms/Common/FormInput';
import PasswordInput from '../Common/PasswordInput';

import modal from '../../../services/modalService';
// import user from '../../../services/userService';
// import auth from '../../../services/authService';
import http from '../../../services/httpService';

import 'assets/scss/forms.styles.scss';

const RegistrationForm = () => {
  const state = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const schema = Yup.object({
    userName: Yup.string()
      .required('A unique username is required')
      .label('Username')
      .matches(new RegExp('^.[A-Za-z0-9]{2,}$'), 'Username must be at least 3 characters long with only alphanumeric characters'),
    email: Yup.string()
      .required('Email Address is required')
      .email('Invalid Email Address'),
    password: Yup.string().required(
      'Password must be 8 - 32 characters long, with at least one lowercase and uppercase letter, number and a special character'
    ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Passwords must match')
  });

  const handleSubmit = async (data, setSubmitting, resetForm) => {
    try {
      setSubmitting(true);
      // const {
      //   data: { token, message, userName }
      // } = await user.register(data);
      // auth.loginWithJwt(token, userName);
      // modal.success(message);
      modal.success('Enjoy!');
      setSubmitting(false);
      resetForm();
      setTimeout(() => (window.location = '/admin'), 300);
    } catch (error) {
      if (!error.response) return;

      const { errors, message } = error.response.data;

      if (http.expectedError(error, 400))
        return !errors ? modal.error(message) : modal.error(...errors);

      if (http.expectedError(error, 404))
        return modal.error('Failed to fetch', 'Not found');

      modal.error(...errors);
    }
  };

  return (
    <>
      <p className="text-center text-muted mb-5">Access your dashboard</p>
      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={(data, { setSubmitting, resetForm }) =>
          handleSubmit(data, setSubmitting, resetForm)
        }
      >
        {({ isSubmitting }) => (
          <Form className="registration">
            <TextField
              label="Username"
              name="userName"
              autoComplete="off"
              required
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              required
            />
            <PasswordInput
              label="Password"
              name="password"
              autoComplete="off"
            />
            <PasswordInput label="Confirm Password" name="confirmPassword" />
            <Button
              type="submit"
              color="primary"
              className={isSubmitting ? 'onload' : null}
              block
            >
              {isSubmitting ? (
                <span>
                  <i className="fas fa-circle-o-notch fa-spin"></i> LOADING
                </span>
              ) : (
                'CREATE ACCOUNT'
              )}
            </Button>
          </Form>
        )}
      </Formik>
      <p className="text-muted text-center mt-4">
        Already have an account?
        <Link to="/login"> Sign In</Link>
      </p>
    </>
  );
};

export default withRouter(RegistrationForm);
