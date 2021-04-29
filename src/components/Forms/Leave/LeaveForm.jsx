import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import CustomForm from '../Common/CustomForm';
import DatePicker from '../Common/DatePicker';
import SelectBox from '../Common/SelectBox';
import EmptyForm from './EmptyForm';

const leaveTypes = ['Select Leave Type', 'Casual Leave 12 days'];

const LeaveForm = ({ data, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };
  return (
    <CustomForm toggleModal={toggle} handleSubmit={handleSubmit}>
      {data ? (
        data.map(leave => (
          <>
            <FormGroup>
              <label className="col-form-label">
                Leave Type <span className="text-danger">*</span>
              </label>
              <SelectBox options={leaveTypes} defaultValue={leave.reason} />
            </FormGroup>

            <FormGroup>
              <label for="exampleDate">
                From <span className="text-danger">*</span>
              </label>
              <DatePicker date={leave.from} />
            </FormGroup>

            <FormGroup>
              <label for="exampleDate">
                To <span className="text-danger">*</span>
              </label>
              <DatePicker date={leave.to} />
            </FormGroup>

            <FormGroup>
              <label for="exampleDate">
                Number of days <span className="text-danger">*</span>
              </label>
              <Input type="text" defaultValue={leave.days} />
            </FormGroup>

            <FormGroup>
              <label for="exampleDate">
                Remaining Leaves<span className="text-danger">*</span>
              </label>
              <Input type="text" />
            </FormGroup>

            <FormGroup>
              <label for="exampleDate">
                Leave Reason<span className="text-danger">*</span>
              </label>
              <Input type="textarea" defaultValue={leave.leaveType} />
            </FormGroup>
          </>
        ))
      ) : (
        <EmptyForm leaveTypes={leaveTypes} />
      )}
    </CustomForm>
  );
};

export default LeaveForm;
