import React from 'react';
import { Col, FormGroup, Input, Label, Form, Row, Button } from 'reactstrap';
import SelectBox from '../Common/SelectBox';
import EmptyForm from './EmptyForm.jsx';

const employees = ['John Doe', 'Woro Master'];

const SalaryForm = ({ data, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };

  return (
    <Form toggleModal={toggle} handleSubmit={handleSubmit}>
      {data ? (
        data.map(employee => (
          <>
            <Row>
              <Col sm={6}>
                <FormGroup>
                  <Label>Select Staff</Label>
                  <SelectBox options={employees} defaultValue={employee.name} />
                </FormGroup>
              </Col>

              <Col sm={6}>
                <Label>Net Salary</Label>
                <Input type="text" defaultValue={employee.netSalary} required />
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <h4 className="text-primary">Earnings</h4>
                <FormGroup>
                  <Label>Basic</Label>
                  <Input type="text" defaultValue={employee.basic} required />
                </FormGroup>

                <FormGroup>
                  <Label>Housing</Label>
                  <Input type="text" defaultValue={employee.housing} required />
                </FormGroup>

                <FormGroup>
                  <Label>Transport</Label>
                  <Input
                    type="text"
                    defaultValue={employee.transport}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Medical Allowance</Label>
                  <Input type="text" defaultValue={employee.medical} required />
                </FormGroup>

                <FormGroup>
                  <Label>Other Allowance</Label>
                  <Input type="text" defaultValue={employee.otherAllowance} />
                </FormGroup>

                {/* <div className="add-more">
                <a href="/">
                  <i className="fa fa-plus-circle"></i> Add More
                </a>
              </div> */}
              </Col>

              <Col sm={6}>
                <h4 className="text-primary">Deductions</h4>
                <FormGroup>
                  <Label>T.D.S</Label>
                  <Input type="text" defaultValue={employee.tax} />
                </FormGroup>

                <FormGroup>
                  <Label>Pension</Label>
                  <Input type="text" defaultValue={employee.pension} />
                </FormGroup>

                <FormGroup>
                  <Label>Loan</Label>
                  <Input type="text" defaultValue={employee.loan} />
                </FormGroup>

                {/* <FormGroup>
                  <Label>Leave</Label>
                  <Input type="text" defaultValue={employee.leave} />
                </FormGroup> 
               <FormGroup>
                <Label>Prof. Tax</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Labour Welfare</Label>
                <Input type="text" />
              </FormGroup> */}
                <FormGroup>
                  <Label>Others</Label>
                  <Input type="text" defaultValue={employee.otherDeduction} />
                </FormGroup>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Button
                color="primary"
                type="submit"
                style={{ minWidth: '200px' }}
              >
                SAVE
              </Button>
            </Row>
          </>
        ))
      ) : (
        <EmptyForm employees={employees} />
      )}
    </Form>
  );
};

export default SalaryForm;
