import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import DatePicker from '../Common/DatePicker';
import SelectBox from '../Common/SelectBox';

const EmptyForm = ({ leaveTypes }) => {
  return (
    <>
      <Col xs={12}>
        <FormGroup>
          <label className="col-form-label">
            Leave Type <span className="text-danger">*</span>
          </label>
          <SelectBox options={leaveTypes} />
        </FormGroup>
      </Col>

      <Col xs={12}>
        <FormGroup>
          <label for="from">
            From <span className="text-danger">*</span>
          </label>
          <DatePicker name="from" />
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup>
          <label for="to">
            To <span className="text-danger">*</span>
          </label>
          <DatePicker name="to" />
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup>
          <label for="number of days">
            Number of days <span className="text-danger">*</span>
          </label>
          <Input type="text" />
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup>
          <label for="remaining leaves">
            Remaining Leaves<span className="text-danger">*</span>
          </label>
          <Input type="text" />
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup>
          <label for="leave reason">
            Leave Reason<span className="text-danger">*</span>
          </label>
          <Input type="textarea" />
        </FormGroup>
      </Col>
    </>
  );
};

export default EmptyForm;
