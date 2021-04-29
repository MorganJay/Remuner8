import React from 'react';
import { Row, Col, FormGroup } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FloatingInput from 'components/Forms/Common/FloatingInput';
import SelectBox from 'components/Forms/Common/SelectBox';
import DatePicker from 'components/Forms/Common/DatePicker';

const options = ['Pending', 'Approved', 'Rejected'];
const roleOptions = ['Employee', 'Manager'];

const InputRow = () => {
  return (
    <Row className="mb-3">
      <Col xs={12} sm={6} md={3} lg={4} xl={2}>
        <FloatingInput label="Employee Name" type="text" />
      </Col>

      <Col xs={12} sm={6} md={3} lg={4} xl={2}>
        <FormGroup>
          <SelectBox
            focusLabel="Job Description"
            label="--Select--"
            options={roleOptions}
          />
        </FormGroup>
      </Col>

      <Col xs={12} sm={6} md={3} lg={4} xl={3}>
        <FormGroup>
          <SelectBox
            focusLabel="Leave Status"
            label="--Select--"
            options={options}
          />
        </FormGroup>
      </Col>

      <Col xs={12} sm={6} md={3} lg={4} xl={3}>
        <FormGroup>
          <DatePicker label="From" />
        </FormGroup>
      </Col>

      <Col xs={12} sm={6} md={3} lg={4} xl={3}>
        <FormGroup>
          <DatePicker label="To" />
        </FormGroup>
      </Col>

      <Col xs={12} sm={6} md={3} lg={4} xl={2}>
        <FormGroup>
          <CustomButton className="btn btn-block">Search</CustomButton>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default InputRow;
