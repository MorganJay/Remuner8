import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';

const FormInput = ({ name, label, error, ...props }) => {
  return (
    <FormGroup>
      <Input
        id={name}
        name={name}
        placeholder={label}
        title={label}
        className="mb-2"
        invalid={error && error.length > 0}
        {...props}
      />
      <Label htmlFor={name} className="label">
        {label}
      </Label>
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

export default FormInput;
