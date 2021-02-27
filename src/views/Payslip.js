import React, { useRef } from 'react';
import { Row } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import PayslipNav from '../components/Payslip/Nav';
import PayslipBody from '../components/Payslip/Body';
import Employee from '../components/Payslip/Employee';
import Earnings from '../components/Payslip/Earnings';
import Deductions from '../components/Payslip/Deductions';
import NetSalary from '../components/Payslip/NetSalary';

import '../assets/css/payslip.css';

const Payslip = () => {
  const componentRef = useRef();
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
      <PayslipNav content={componentRef.content} />
        <ReactToPrint
          trigger={() => (
            <button className="btn btn-white">
              <i className="fa fa-print fa-lg"></i> Print
            </button>
          )}
          content={() => componentRef.current}
        />
        <PayslipBody ref={componentRef}>
          <Employee />
          <Row>
            <Earnings />
            <Deductions />
            <NetSalary />
          </Row>
        </PayslipBody>
      </div>
    </div>
  );
};

export default Payslip;
