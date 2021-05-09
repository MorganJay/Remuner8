import React from 'react';
import { Card, Row, CardBody, Col } from 'reactstrap';

import Image from 'assets/img/theme/team-1-800x800.jpg';
import 'assets/css/EmployeeProfile.css';
import EditIcon from './EditIcon';

const Header = ({ toggleModal }) => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col md={12}>
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img alt="Employee Avatar" src={Image} />
                </div>
              </div>
              <div className="profile-basic">
                <Row>
                  <Col md={12} xl={5} className="mb-lg-2">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                      <h6 className="text-muted">UI/UX Design Team</h6>
                      <small className="text-muted">Web Designer</small>
                      <div className="staff-id">Employee ID : FT-0001</div>
                      <div className="small doj text-muted">
                        Date of Join : 1st Jan 2013
                      </div>
                    </div>
                  </Col>
                  <Col md={12} lg={12} xl={7} className="">
                    <ul className="personal-info">
                      <li>
                        <div className="title">Phone:</div>
                        <div className="text">
                          <a href={`tel:9876543210`}>9876543210</a>
                        </div>
                      </li>
                      <li>
                        <div className="title">Email:</div>
                        <div className="text">
                          <a href={`mailto:johndoe@example.com`}>
                            johndoe@example.com
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="title">Birthday:</div>
                        <div className="text">24th July</div>
                      </li>
                      <li>
                        <div className="title">Address:</div>
                        <div className="text">
                          1861 Bayonne Ave, Manchester Township, NJ, 08759
                        </div>
                      </li>
                      <li>
                        <div className="title">Gender:</div>
                        <div className="text">Male</div>
                      </li>
                      <li>
                        <div className="text">
                          <div className="avatar-box"></div>
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
