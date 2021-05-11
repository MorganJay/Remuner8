import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Button } from 'reactstrap';

import FormInput from './FormInput';
import Select from './Select';
import PasswordInput from './PasswordInput';

class FormComponent extends Component {
  state = { data: {}, errors: {} };

  passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}|'.<>;:,/]).{8,33}$";

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    const data = { ...this.state.data };
    data[name] = value;

    this.setState({ data, errors });
  };

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;

    return (
      <FormInput
        required
        label={label}
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderPasswordInput(name, label) {
    const { data, errors } = this.state;
    return (
      <PasswordInput
        name={name}
        onChange={this.handleChange}
        value={data[name]}
        label={label}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        options={options}
        required
      />
    );
  }

  renderButton(label) {
    return (
      <Button color="primary" disabled={this.validate()} className="mt-2">
        {label}
      </Button>
    );
  }
}

export default FormComponent;
