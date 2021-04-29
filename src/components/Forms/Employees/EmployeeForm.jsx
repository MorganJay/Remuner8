import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import CustomForm from '../Common/CustomForm';
import SelectBox from '../Common/SelectBox';
import DatePicker from '../Common/DatePicker';
import EmptyForm from './EmptyForm';

const departmentOptions = [
  'Select Department',
  'Software Eng',
  'IT Management',
  'Marketing'
];

const jobOptions = [
  'Select Job Description',
  'Web Designer',
  'Web Developer',
  'Android Developer',
  '.NET Developer'
];

const EmployeeForm = ({ data, toggle, readOnly, onUpload, avatar }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };

  return (
    <CustomForm toggleModal={toggle} onSubmit={handleSubmit}>
      {data ? (
        data.map(employee => (
          <>
            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <Input type="text" defaultValue={employee.name} required />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  Last Name
                  <span className="text-danger">*</span>
                </label>
                <Input type="text" defaultValue={employee.name} required />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <Input type="email" defaultValue={employee.email} />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  Employee ID <span className="text-danger">*</span>
                </label>
                <Input
                  type="text"
                  defaultValue={employee.employee_id}
                  required
                  readOnly={readOnly}
                  placeholder="FT-0001"
                />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  Date Joined <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <DatePicker date={employee.join_date} required />
                </div>
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  Phone <span className="text-danger">*</span>
                </label>
                <Input
                  type="tel"
                  defaultValue={employee.phone_number}
                  required
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <label className="col-form-label">
                  Department <span className="text-danger">*</span>
                </label>
                <SelectBox
                  label="Select Department"
                  options={departmentOptions}
                  defaultValue={employee.department}
                  required
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <label className="col-form-label">
                  Job Description <span className="text-danger">*</span>
                </label>
                <SelectBox
                  label="Select Job Description"
                  options={jobOptions}
                  defaultValue={employee.name}
                  required
                />
              </FormGroup>
            </Col>
          </>
        ))
      ) : (
        <EmptyForm
          departments={departmentOptions}
          jobs={jobOptions}
          onUpload={onUpload}
          avatar={avatar}
        />
      )}
    </CustomForm>
  );
};

export default EmployeeForm;
