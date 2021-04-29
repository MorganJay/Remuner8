import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import CustomForm from 'components/Forms/Common/CustomForm';
import DatePicker from '../Common/DatePicker';
import SelectBox from '../Common/SelectBox';
import EmptyForm from './EmptyForm';

const employees = ['John Doe', 'Woro Master'];

const OvertimeForm = ({ data, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };
  return (
    <CustomForm toggleModal={toggle} handleSubmit={handleSubmit}>
      {data ? (
        data.map(overtime => (
          <>
            <FormGroup>
              <label className="col-form-label">
                Select Employee <span className="text-danger">*</span>
              </label>
              <SelectBox options={employees} defaultValue={overtime.name} />
            </FormGroup>

            <FormGroup>
              <label for="exampleDate">
                Overtime Date <span className="text-danger">*</span>
              </label>
              <DatePicker date={overtime.otDate} />
            </FormGroup>

            <FormGroup>
              <label for="exampleDate">
                Overtime Hours <span className="text-danger">*</span>
              </label>
              <Input type="number" defaultValue={overtime.otHours} />
            </FormGroup>

            <FormGroup>
              <label for="description">
                Description<span className="text-danger">*</span>
              </label>
              <Input
                type="textarea"
                name="description"
                defaultValue={overtime.description}
              />
            </FormGroup>
          </>
        ))
      ) : (
        <EmptyForm employees={employees} />
      )}
    </CustomForm>
  );
};

export default OvertimeForm;
