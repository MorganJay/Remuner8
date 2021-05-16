import React from 'react';
import { Col, FormGroup, Label } from 'reactstrap';
import * as Yup from 'yup';

import SelectBox from 'components/Forms/Common/SelectBox';
import FormInput from '../../Forms/Common/FormInput';
import CustomForm from './../../Forms/Common/CustomForm';

const ProfileForm = () => {
  const state = { bankName: '', accountNumber: '' };

  const schema = Yup.object({
    bankName: Yup.string().required(),
    accountNumber: Yup.number().required()
  });

  const handleSubmit = (data, setSubmitting) => {
    setSubmitting(true);
    console.log(data);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <CustomForm
      handleSubmit={handleSubmit}
      buttonText="SUBMIT"
      values={state}
      schema={schema}
    >
      <>
        <Col md={6}>
          <FormGroup>
            <Label style={{ color: '#1f1f1f' }}>Bank</Label>
            <SelectBox
              name="bank"
              label="Bank"
              options={['Access Bank', 'GTB']}
               value="Access Bank"
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <Label style={{ color: '#1f1f1f' }}>Account Number</Label>
          <FormInput name="accountNumber" defaultValue="0787659961" required />
        </Col>
      </>
    </CustomForm>
  );
};

export default ProfileForm;
