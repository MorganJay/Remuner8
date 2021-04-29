import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import SelectBox from '../Common/SelectBox';

const EmptyForm = ({ departments }) => {
  return (
    <>
      <Col xs={12}>
        <FormGroup>
          <label for="jobDescription">
            Job Description <span className="text-danger">*</span>
          </label>
          <Input type="text" name="jobDescriptionName" required />
        </FormGroup>
      </Col>

      <Col xs={12}>
        <FormGroup>
          <label className="col-form-label" htmlFor="department">
            Department <span className="text-danger">*</span>
          </label>
          <SelectBox
            options={departments}
            name="department"
            label="Select Department"
            required
          />
        </FormGroup>
      </Col>
    </>
  );
};

export default EmptyForm;
