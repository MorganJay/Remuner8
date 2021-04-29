import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import CustomForm from '../Common/CustomForm';

const DepartmentForm = ({ data, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };

  return (
    <CustomForm toggleModal={toggle} onSubmit={handleSubmit}>
      {data ? (
        data.map(({ id, departmentName }) => (
          <Col key={id}>
            <FormGroup>
              <label className="col-form-label">
                Department Name <span className="text-danger">*</span>
              </label>
              <Input
                type="text"
                autoFocus
                required
                defaultValue={departmentName}
              />
            </FormGroup>
          </Col>
        ))
      ) : (
        <Col>
          <FormGroup>
            <label className="col-form-label">
              Department Name <span className="text-danger">*</span>
            </label>
            <Input type="text" autoFocus required />
          </FormGroup>
        </Col>
      )}
    </CustomForm>
  );
};

export default DepartmentForm;
