import React, { useState } from 'react';
import { FormGroup, FormFeedback, Input, Label } from 'reactstrap';
import { useField, ErrorMessage } from 'formik';

const PasswordInput = ({ label, error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(props);
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <button
        className="toggle-password"
        tabIndex="-1"
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={
          showPassword
            ? 'Hide password.'
            : 'Show password as plain text. Warning: this will display your password on the screen.'
        }
      >
        {showPassword ? 'Hide' : 'Show'} password
      </button>
      <Input
        type={showPassword ? 'text' : 'password'}
        title={label}
        autoComplete="current-password"
        placeholder={label}
        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}\|'.<>;:,/]).{8,33}$"
        className={meta.touched ? (meta.error ? 'is-invalid' : 'is-valid') : ''}
        required
        {...props}
        {...field}
      />
      <Label htmlFor="current-password" className="label">
        {label}
      </Label>
      <ErrorMessage component={FormFeedback} name={field.name} />
      {error && (
        <>
          <FormFeedback
            id="password-constraints"
            className={error ? 'text-red' : null}
          >
            Must be 8 - 32 characters long, with at least one lowercase and
            uppercase letter, numbers and special characters
          </FormFeedback>
        </>
      )}
    </FormGroup>
  );
};

export default PasswordInput;
