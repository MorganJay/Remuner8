import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import SelectBox from '../Common/SelectBox';

const categories = ['Monthly remuneration', 'Additional Remuneration'];

const employees = ['John Doe', 'Woro Master'];

const AdditionForm = ({ data, toggle }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };

  const getParsedAmount = amount =>
    amount && amount.replace(',', '').split('.')[0];

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          Name <span className="text-danger">*</span>
        </Label>
        <Input type="text" defaultValue={data && data[0].name} required />
      </FormGroup>

      <FormGroup>
        <Label>
          Category <span className="text-danger">*</span>
        </Label>
        <SelectBox
          label="Select a category"
          options={categories}
          defaultValue={data && data[0].category}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>
          Amount <span className="text-danger">*</span>
        </Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">&#8358;</InputGroupAddon>
          <Input
            placeholder="Amount"
            min={0}
            type="number"
            step="50"
            defaultValue={data && getParsedAmount(data[0].amount)}
          />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label className="d-block">
          Assignee <span className="text-danger">*</span>
        </Label>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" defaultChecked /> No assignee
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" /> All employees
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" /> Select employee
          </Label>
        </FormGroup>
        <SelectBox
          className="mt-1"
          label="-"
          options={employees}
          disabled
          required
        />
      </FormGroup>

      <div className="submit-section text-center mt-4">
        <Button color="primary" className="submit-btn px-5">
          SAVE
        </Button>
      </div>
    </Form>
  );
};

export default AdditionForm;
