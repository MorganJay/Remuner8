import React, { useContext } from 'react';
import { Form, Row, Col, Button, FormGroup, Label } from 'reactstrap';

import SelectBox from 'components/Forms/Common/SelectBox';
import FormInput from '../../Forms/Common/FormInput';
import DatePicker from './../../Forms/Common/DatePicker';
import { AppContext } from 'context/store';
import { ProfileImageWrap } from './ProfileForm.styles';

const ProfileForm = () => {
  const {
    state: { avatar }
  } = useContext(AppContext);
  

  const handleSubmit = () => console.log('')

  return (
    <Form>
      <Row>
        <Col md={12}>
          <ProfileImageWrap className="profile-img-wrap">
            <img className="inline-block" src={avatar} alt="user" />
            <div className="fileupload btn">
              <span className="text-white" style={{ fontSize: '15px' }}>
                edit
              </span>
              <input className="upload" type="file" />
            </div>
          </ProfileImageWrap>

          <Row>
            <Col md={6}>
              <Label style={{ color: '#1f1f1f' }}>First Name</Label>
              <FormInput defaultValue="John" name="firstName" required />
            </Col>
            <Col md={6}>
              <Label style={{ color: '#1f1f1f' }}>Last Name</Label>
              <FormInput defaultValue="Doe" name="lastName" required />
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ color: '#1f1f1f' }}>Date of Birth</Label>
                <DatePicker />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ color: '#1f1f1f' }}>Gender</Label>
                <SelectBox
                  name="gender"
                  label="Gender"
                  options={['Male', 'Female']}
                  defaultValue="Select Gender"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Label style={{ color: '#1f1f1f' }}>Address</Label>
          <FormInput
            type="textarea"
            name="address"
            defaultValue="Ajah"
            required
          />
        </Col>
        <Col md={6}>
          <Label style={{ color: '#1f1f1f' }}>Phone Number</Label>
          <FormInput name="phoneNumber" defaultValue="08165336114" required />
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ color: '#1f1f1f' }}>Department</Label>
            <SelectBox
              name="department"
              label="Department"
              options={['']}
              defaultValue="Select Department"
            />
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
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="submit-section justify-content-center">
        <Button color="primary" type="submit" style={{ minWidth: '200px' }}>
          SUBMIT
        </Button>
      </Row>
    </Form>
  );
};

export default ProfileForm;
