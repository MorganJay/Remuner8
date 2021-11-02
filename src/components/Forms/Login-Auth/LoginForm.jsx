import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Button, FormGroup } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import PasswordInput from "./../Common/PasswordInput";
import { TextField } from "../../Forms/Common/FormInput";
// import { AppContext } from './../../../context/store';
import http from "../../../services/httpService";
import auth from "../../../services/authService";
import modal from "../../../services/modalService";

import "assets/scss/forms.styles.scss";

const LoginForm = props => {
  // const appContext = useContext(AppContext);
  const currentUser = auth.currentUser;
  if (currentUser) return <Redirect to="/admin" />;

  const state = { email: "", password: "" };

  const schema = Yup.object({
    email: Yup.string()
      .required("Email Address is required obviously")
      .email("Invalid Email Address"),
    password: Yup.string().required("Password is required obviously"),
  });

  const handleSubmit = async (data, setSubmitting) => {
    const { state } = props.location;
    // const { email, password } = data;
    // const { setUsername } = appContext.events;
    try {
      setSubmitting(true);
      // const username = await auth.login(email, password);
      // await setUsername(username);
      // setSubmitting(false);

      setTimeout(() => {
        setSubmitting(false);
        modal.success();
        window.location = state ? state.from.pathname : "/admin";
      }, 1300);
    } catch (error) {
      if (!error.response) return;
      const { errors, message } = error.response.data;

      if (http.expectedError(error, 400))
        return !errors ? modal.error(message) : modal.error(...errors);

      if (http.expectedError(error, 401))
        return modal.error("Wrong email or password", ...errors);

      if (http.expectedError(error, 404))
        return modal.error("Failed to fetch", "Not found");

      modal.error(...errors);
    }
  };

  return (
    <>
      <p className="text-muted text-center mb-5">
        Don't have an account yet? <Link to="/register"> Sign Up</Link>
      </p>
      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={(data, { setSubmitting }) =>
          handleSubmit(data, setSubmitting)
        }
      >
        {({ isSubmitting }) => (
          <Form className="login">
            <TextField
              label="Email Address"
              name="email"
              type="email"
              required
            />
            <PasswordInput label="Password" name="password" />
            <FormGroup>
              <Button
                type="submit"
                id="sign-in"
                color="primary"
                className={isSubmitting ? "onload" : ""}
                block
              >
                {isSubmitting ? (
                  <span>
                    <i className="fas fa-circle-o-notch fa-spin"></i> LOADING
                  </span>
                ) : (
                  "LOG IN"
                )}
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
      <div className="d-grid gap-2 mt-4 text-center">
        <Link to="/resetPassword" className="forgot-text">
          Forgot password?
        </Link>
      </div>
    </>
  );
};

export default withRouter(LoginForm);
