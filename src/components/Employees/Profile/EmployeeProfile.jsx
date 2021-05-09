import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

import CustomModal from './../../Modals/CustomModal';
import PageHeader from 'components/Headers/PageHeader';
import Header from './Header';
import PersonalInformation from './PersonalInformation';
import BankInformation from './BankInformation';

import 'assets/css/EmployeeProfile.css';

const EmployeeProfile = props => {
  const [state, setState] = useState({
    modalOpen: false,
    modalLabel: ''
  });
  const { modalOpen, modalLabel } = state;

  const toggleModal = label => setState({ modalOpen: !modalOpen, modalLabel: label });
  return (
    <>
      <PageHeader breadcrumb="Profile" />
      <Header toggleModal={() => toggleModal('Profile Information')} />
      <Row>
        <Col md={12} lg={6} className="d-flex">
          <PersonalInformation
            toggle={() => toggleModal('Personal Information')}
          />
        </Col>
        <Col md={12} lg={6} className="d-flex">
          <BankInformation toggle={() => toggleModal('Bank Information')} />
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

export default EmployeeProfile;
