import React, { useState } from 'react';
import { FormGroup, Button, FormFeedback, Input, Label } from 'reactstrap';

const PasswordInput = ({ name, label, error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormGroup>
      <Button
        id="toggle-password"
        type="button"
        onClick={() => setShowPassword(!showPassword)}
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
        name={name}
        id={name}
        title={label}
        autoComplete="current-password"
        placeholder={label}
        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}\|'.<>;:,/]).{8,33}$"
        required
        valid={!error}
        invalid={error}
        {...props}
      />
      <Label htmlFor="current-password" className="label">
        {label}
      </Label>
      {error && <FormFeedback>Invalid Password</FormFeedback>}
    </FormGroup>
  );
};

export default PasswordInput;
