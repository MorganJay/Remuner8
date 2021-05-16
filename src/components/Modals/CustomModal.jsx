import React from 'react';
import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const CustomModal = ({ isOpen, toggle, label, children }) => (
  <Modal keyboard isOpen={isOpen} toggle={toggle} centered>
    <Header toggle={toggle}>
      <span style={{ fontSize: '1.25rem' }}>{label}</span>
    </Header>
    <ModalBody>{children}</ModalBody>
  </Modal>
);

export default CustomModal;

const Header = styled(ModalHeader)`
  position: relative;
  justify-content: center;

  button {
    right: 1.7rem;
    top: 2rem;
    position: absolute;
    background-color: #a0a0a0;
    border-radius: 50%;
    line-height: 20px;
    color: rgb(255, 255, 255);
    font-size: 15px;
    height: 25px;
    width: 25px;
    padding: 0 !important;

    span {
      font-weight: 700;
      text-shadow: 0 1px 0 #fff;
      line-height: 14px !important;
      margin: 3px;
      color: inherit !important;
    }
  }
`;
