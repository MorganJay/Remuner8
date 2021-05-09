import React from 'react';
import { Card, Row, CardBody, Col } from 'reactstrap';
import dateFormat from 'dateformat';

import EditIcon from './EditIcon';

import 'assets/css/EmployeeProfile.css';

const Header = ({ employee, toggleModal }) => {
  if (!employee) return null;

  const {
    name,
    department,
    join_date,
    avatar,
    email,
    employee_id,
    phone_number
  } = employee;

  return (
    <Card>
      <CardBody>
        <Row>
          <Col md={12}>
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img alt="Employee Avatar" src={avatar} />
                </div>
              </div>
              <div className="profile-basic">
                <Row>
                  <Col md={12} xl={5} className="mb-lg-2">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">{name}</h3>
                      <h6 className="text-muted">{department}</h6>
                      <small className="text-muted">Web Designer</small>
                      <div className="staff-id">
                        {`Employee ID : ${employee_id}`}
                      </div>
                      <div className="small doj text-muted">
                        {`Date of Join : ${dateFormat(
                          join_date,
                          'dd mmmm yyyy'
                        )}`}
                      </div>
                    </div>
                  </Col>
                  <Col md={12} lg={12} xl={7} className="">
                    <ul className="personal-info">
                      <li>
                        <div className="title">Phone:</div>
                        <div className="text">
                          <a href={`tel:${phone_number}`}>{phone_number}</a>
                        </div>
                      </li>
                      <li>
                        <div className="title">Email:</div>
                        <div className="text">
                          <a href={`mailto:${email}`}>{email}</a>
                        </div>
                      </li>
                      <li>
                        <div className="title">Residential Address:</div>
                        <div className="text">
                          1861 Bayonne Ave, Manchester Township, NJ, 08759
                        </div>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="pro-edit">
                <EditIcon toggle={toggleModal} />
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Header;
