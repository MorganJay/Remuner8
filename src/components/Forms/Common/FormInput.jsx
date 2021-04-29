import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';

const FormInput = ({ name, label, error, ...props }) => {
  return (
    <FormGroup>
      <Input
        id={name}
        name={name}
        title={label}
        className="mb-2"
        valid={!error}
        invalid={error}
        {...props}
      />
      <Label htmlFor={name}>{label}</Label>
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

export default FormInput;
