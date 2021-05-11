import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';

import DatePicker from '../Common/DatePicker';
import SelectBox from '../Common/SelectBox';

const EmptyForm = ({ employees }) => {
  return (
    <>
      <Col xs={12}>
        <FormGroup>
          <label className="col-form-label">
            Select Employee <span className="text-danger">*</span>
          </label>
          <SelectBox options={employees} />
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup>
          <label htmlFor="exampleDate">
            Overtime Date <span className="text-danger">*</span>
          </label>
          <DatePicker />
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup>
          <label htmlFor="exampleDate">
            Overtime Hours <span className="text-danger">*</span>
          </label>
          <Input type="number" />
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup>
          <label htmlFor="description">
            Description<span className="text-danger">*</span>
          </label>
          <Input type="textarea" name="description" />
        </FormGroup>
      </Col>
    </>
  );
};

export default EmptyForm;
