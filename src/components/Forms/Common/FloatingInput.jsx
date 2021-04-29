import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const FloatingInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup className="form-focus">
      <Input {...otherProps} />
      {label && <Label className="focus-label">{label}</Label>}
    </FormGroup>
  );
};

export default FloatingInput;
