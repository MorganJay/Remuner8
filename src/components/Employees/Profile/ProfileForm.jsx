import React from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import * as Yup from 'yup';

import { FormikDatePicker } from 'components/Forms/Common/DatePicker';
import SelectBox from 'components/Forms/Common/SelectBox';
import CustomForm from './../../Forms/Common/CustomForm';
import FormInput, { TextField } from '../../Forms/Common/FormInput';
import FormikSelectBox from './../../Forms/Common/FormikSelectBox';
import CustomSelect from './../../Forms/Common/CustomSelect'

import { getValidDate } from './../../../utils/functions';
import { ProfileImageWrap } from './ProfileForm.styles';

const ProfileForm = ({ employee }) => {
  const state = { ...employee };

  const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    join_date: Yup.date().required(),
    address: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    // department: Yup.number().required(),
    // jobDescriptionId: Yup.number().required()
  });

  const handleSubmit = (data, setSubmitting) => {
    setSubmitting(true);
    console.log(data);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  const { avatar, join_date } = state;

  return (
    <CustomForm
      handleSubmit={handleSubmit}
      buttonText="SUBMIT"
      values={state}
      schema={schema}
    >
      <Col md={12}>
        <ProfileImageWrap className="profile-img-wrap">
          <img className="inline-block" src={avatar} alt="user" name="avatar" />
          <div className="fileupload btn">
            <span className="text-white" style={{ fontSize: '15px' }}>
              edit
            </span>
            <input className="upload" type="file" />
          </div>
        </ProfileImageWrap>

        <Row>
          <Col md={6}>
            <Label style={{ color: '#1f1f1f' }}>Employee ID</Label>
            <TextField name="employee_id" required />
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label style={{ color: '#1f1f1f' }}>Date of Join</Label>
              {/* <DatePicker name="join_date" date={join_date} required /> */}
              <FormikDatePicker
                name="join_date"
                value={getValidDate(join_date)}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <Label style={{ color: '#1f1f1f' }}>First Name</Label>
            <TextField name="name" required />
          </Col>
          <Col md={6}>
            <Label style={{ color: '#1f1f1f' }}>Last Name</Label>
            <TextField name="name" required />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Label style={{ color: '#1f1f1f' }}>Phone Number</Label>
            <TextField name="phone_number" required />
          </Col>
          <Col md={6}>
            <Label style={{ color: '#1f1f1f' }}>Email Address</Label>
            <TextField type="email" name="email" required />
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label style={{ color: '#1f1f1f' }}>Department</Label>
              <FormikSelectBox
                name="department"
                label="Department"
                options={['']}
                // required
              />
              <CustomSelect />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label style={{ color: '#1f1f1f' }}>Job Description</Label>
              <SelectBox
                name="jobDescription"
                label="Job Description"
                options={['']}
                defaultValue="Select Job Description"
                // required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <Label style={{ color: '#1f1f1f' }}>Address</Label>
            <FormInput
              type="textarea"
              name="address"
              defaultValue="Ajah"
              required
            />
          </Col>
        </Row>
      </Col>
    </CustomForm>
  );
};

export default ProfileForm;
