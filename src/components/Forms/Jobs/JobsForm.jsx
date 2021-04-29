import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import CustomForm from '../Common/CustomForm';
import SelectBox from '../Common/SelectBox';
import EmptyForm from './EmptyForm';

const departmentOptions = [
  'Select Department',
  'Software Eng',
  'IT Management',
  'Marketing'
];

const JobsForm = ({ data, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };
  return (
    <CustomForm toggleModal={toggle} onSubmit={handleSubmit}>
      {data ? (
        data.map(job => (
          <>
            <Col xs={12}>
              <FormGroup>
                <label htmlFor="jobDescriptionName" className="col-form-label">
                  Job Description <span className="text-danger">*</span>
                </label>
                <Input type="text" defaultValue={job.jobs} required />
              </FormGroup>
            </Col>

            <Col xs={12}>
              <FormGroup>
                <label className="col-form-label">
                  Department <span className="text-danger">*</span>
                </label>
                <SelectBox
                  label="Select Department"
                  options={departmentOptions}
                  defaultValue={job.departments}
                  required
                />
              </FormGroup>
            </Col>
          </>
        ))
      ) : (
        <EmptyForm departments={departmentOptions} />
      )}
    </CustomForm>
  );
};

export default JobsForm;
