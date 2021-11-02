import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import modalService from "services/modalService";

const ResetPassword = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(!loading);

    setTimeout(() => {
      modalService.success();
      setTimeout(() => history.replace("/login", 2000));
    }, 1230);
  };

  return (
    <>
      <p className="title text-center text-muted">Forgot Password?</p>
      <h4 className="subtitle mt-2 mb-4 text-center">
        Enter your email to get a password reset link
      </h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            autoFocus
            required
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit" color="primary" block>
            {loading ? (
              <span>
                <i className="fas fa-circle-o-notch fa-spin"></i> LOADING
              </span>
            ) : (
              "RESET PASSWORD"
            )}
          </Button>
        </FormGroup>
      </Form>
      <p className="text-center">
        Remember your password? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default withRouter(ResetPassword);
