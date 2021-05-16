import React from 'react';
import { Col, FormGroup, Label } from 'reactstrap';
import * as Yup from 'yup';

import SelectBox from 'components/Forms/Common/SelectBox';
import DatePicker from './../../Forms/Common/DatePicker';
import CustomForm from './../../Forms/Common/CustomForm';

const PersonalForm = () => {
  const state = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phoneNumber: '',
    departmentId: '',
    jobDescriptionId: ''
  };

  const schema = Yup.object({});

  const handleSubmit = (data, setSubmitting) => {
    setSubmitting(true);
    console.log(data);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <CustomForm
      handleSubmit={handleSubmit}
      buttonText="SUBMIT"
      values={state}
      schema={schema}
    >
      <>
        <Col md={6}>
          <FormGroup>
            <Label style={{ color: '#1f1f1f' }}>Date of Birth</Label>
            <DatePicker name="dateOfBirth" required />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ color: '#1f1f1f' }}>Gender</Label>
            <SelectBox
              name="gender"
              label="Gender"
              options={['Male', 'Female']}
              defaultValue="Select Gender"
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ color: '#1f1f1f' }}>Nationality</Label>
            <SelectBox
              name="nationality"
              label="Nationality"
              options={['']}
              defaultValue="Select Nationality"
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ color: '#1f1f1f' }}>State of Origin</Label>
            <SelectBox
              name="state"
              label="State"
              options={['']}
              defaultValue="Select State"
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ color: '#1f1f1f' }}>Marital Status</Label>
            <SelectBox
              name="maritalStatus"
              label="Marital Status"
              options={['Single', 'Married', 'Divorced']}
              defaultValue="Select Marital Status"
              required
            />
          </FormGroup>
        </Col>
      </>
    </CustomForm>
  );
};

export default PersonalForm;
