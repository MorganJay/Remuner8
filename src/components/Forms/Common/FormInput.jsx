import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormGroup>
      <Input
        placeholder={label}
        title={label}
        type={props.type || 'text'}
        className={meta.touched ? (meta.error ? 'is-invalid' : 'is-valid') : ''}
        autoComplete="off"
        invalid={!!errorText}
        {...field}
        {...props}
      />
      <Label htmlFor={field.name} className="label">
        {label}
      </Label>
      <ErrorMessage component={FormFeedback} name={field.name} />
    </FormGroup>
  );
};

const FormInput = ({ name, label, ...props }) => {
  return (
    <FormGroup>
      <Input
        id={name}
        name={name}
        placeholder={label}
        title={label}
        // invalid={error && error.length > 0}
        {...props}
      />
      <Label htmlFor={name} className="label">
        {label}
      </Label>
    </FormGroup>
  );
};

export default FormInput;
