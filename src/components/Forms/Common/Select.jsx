import React from 'react';
import { FormGroup } from 'reactstrap';

const Select = ({ name, label, error, options, ...props }) => {
  return (
    <FormGroup>
      <label htmlFor={name}>{label}</label>
      <select className="form-control mb-2" id={name} name={name} {...props}>
        <option value="" className="text-muted">
          Select Genre
        </option>
        {options &&
          options.map(({ _id, name }, index) => (
            <option value={_id} key={index}>
              {name}
            </option>
          ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </FormGroup>
  );
};

export default Select;
