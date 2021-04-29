import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import SelectBox from '../Common/SelectBox';
import DatePicker from '../Common/DatePicker';

const EmptyForm = props => {
  return (
    <>
      <Col sm={6}>
        <FormGroup>
          <label className="col-form-label">
            Employee ID <span className="text-danger">*</span>
          </label>
          <Input required placeholder="FT-0001" />
        </FormGroup>
      </Col>

      <Col sm={6}>
        <FormGroup>
          <label className="col-form-label">
            First Name <span className="text-danger">*</span>
          </label>
          <Input type="text" required />
        </FormGroup>
      </Col>

      <Col sm={6}>
        <FormGroup>
          <label className="col-form-label">
            Last Name <span className="text-danger">*</span>
          </label>
          <Input type="text" required />
        </FormGroup>
      </Col>

      <Col sm={6}>
        <FormGroup>
          <label className="col-form-label">
            Email Address <span className="text-danger">*</span>
          </label>
          <Input type="email" />
        </FormGroup>
      </Col>

      <Col sm={6}>
        <FormGroup>
          <label className="col-form-label">
            Phone Number <span className="text-danger">*</span>
          </label>
          <Input type="tel" placeholder="9876543210" />
        </FormGroup>
      </Col>

      <Col sm={6}>
        <FormGroup>
          <label className="col-form-label">
            Date Joined <span className="text-danger">*</span>
          </label>
          <div className="cal-icon">
            <DatePicker />
          </div>
        </FormGroup>
      </Col>

      <Col md={6}>
        <FormGroup>
          <label className="col-form-label">
            Department <span className="text-danger">*</span>
          </label>
          <SelectBox label="Select Department" options={props.departments} />
        </FormGroup>
      </Col>

      <Col md={6}>
        <FormGroup>
          <label className="col-form-label">
            Job Description <span className="text-danger">*</span>
          </label>
          <SelectBox label="Select Job Description" options={props.jobs} />
        </FormGroup>
      </Col>
    </>
  );
};

export default EmptyForm;
