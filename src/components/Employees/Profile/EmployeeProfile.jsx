import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import CustomModal from './../../Modals/CustomModal';
import CustomButton from 'components/Custom-Buttons/Button';
import PageHeader from 'components/Headers/PageHeader';
import Header from './Header';
import PersonalInformation from './PersonalInformation';
import BankInformation from './BankInformation';

import { AppContext } from 'context/store';
import EmployeeService from 'services/employeeService';

import 'assets/css/EmployeeProfile.css';

const EmployeeProfile = props => {
  const {
    state: { employee }
  } = useContext(AppContext);

  const [state, setState] = useState({
    modalOpen: false,
    modalLabel: '',
    profile: employee || EmployeeService.currentEmployee
  });

  const { modalOpen, modalLabel, profile } = state;

  const toggleModal = label =>
    setState({ modalOpen: !modalOpen, modalLabel: label });

  return !profile ? (
    <div
      style={{
        transform: 'translateY(-50%) translateX(-50%)',
        top: '50%',
        position: 'absolute',
        left: '50%',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <h1 className="text-white">Select an employee to view their profile</h1>
      <h3>
        <Link className="text-white" to="/admin/employees">
          Click Here
        </Link>
      </h3>
    </div>
  ) : (
    <>
      <PageHeader
        breadcrumb="Profile"
        button={
          <CustomButton
            className="btn add-btn mr-0 float-right"
            onClick={() => props.history.goBack()}
          >
            <i className="fa fa-arrow-left"></i> Go Back
          </CustomButton>
        }
      />
      <Header
        toggleModal={() => toggleModal('Profile Information')}
        employee={profile}
      />
      <Row>
        <Col md={12} lg={6} className="d-flex">
          <PersonalInformation
            toggle={() => toggleModal('Personal Information')}
            employee={profile}
          />
        </Col>
        <Col md={12} lg={6} className="d-flex">
          <BankInformation
            toggle={() => toggleModal('Bank Information')}
            employee={profile}
          />
        </Col>
      </Row>
      <CustomModal
        label={modalLabel}
        isOpen={modalOpen}
        toggle={() => toggleModal('')}
      >
        Hello World
      </CustomModal>
    </>
  );
};

export default withRouter(EmployeeProfile);
