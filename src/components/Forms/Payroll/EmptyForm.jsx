import React from 'react';
import { Col, FormGroup, Input, Label, Form, Row, Button } from 'reactstrap';
import SelectBox from '../Common/SelectBox';

const EmptyForm = ({ toggle, employees }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };

  return (
    <Form toggleModal={toggle} handleSubmit={handleSubmit}>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <Label>Select Staff</Label>
            <SelectBox label="Select Staff" options={employees} />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <Label>Net Salary</Label>
          <Input type="text" required />
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <h4 className="text-primary">Earnings</h4>
          <FormGroup>
            <Label>Basic</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Housing</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Transport</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Medical Allowance</Label>
            <Input type="text" required />
          </FormGroup>

          <FormGroup>
            <Label>Other Allowance</Label>
            <Input type="text" />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <h4 className="text-primary">Deductions</h4>
          <FormGroup>
            <Label>T.D.S</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup>
            <Label>Pension</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup>
            <Label>Loan</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup>
            <Label>Others</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Button color="primary" type="submit" style={{ minWidth: '200px' }}>
          SAVE
        </Button>
      </Row>
    </Form>
  );
};

export default EmptyForm;
