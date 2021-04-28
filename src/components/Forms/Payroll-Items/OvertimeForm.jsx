import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import SelectBox from '../SelectBox';

const rates = ['Daily Rate', 'Hourly Rate'];

const OvertimeForm = ({ data, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          Name <span className="text-danger">*</span>
        </Label>
        <Input type="text" required defaultValue={data && data[0].name} />
      </FormGroup>

      <FormGroup>
        <Label>
          Rate Type <span className="text-danger">*</span>
        </Label>
        <SelectBox
          label=" - "
          options={rates}
          defaultValue={data && rates[1]}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label className="d-block">
          Rate <span className="text-danger">*</span>
        </Label>
        <Input type="text" defaultValue={data && data[0].rate}  required />
      </FormGroup>

      <div className="submit-section text-center mt-4">
        <Button color="primary" className="submit-btn px-5">
          SAVE
        </Button>
      </div>
    </Form>
  );
};

export default OvertimeForm;
