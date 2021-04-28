import React from 'react';
import '../../../assets/css/EmployeeProfile.css';

const Header = () => {
  return (
    <div className="card mb-0">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <a href="#">
                    <img
                      alt=""
                      src="/purple/fa88689eba04e38282d26c8b1a25c274.jpg"
                    />
                  </a>
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                      <h6 className="text-muted">UI/UX Design Team</h6>
                      <small className="text-muted">Web Designer</small>
                      <div className="staff-id">Employee ID : FT-0001</div>
                      <div className="small doj text-muted">
                        Date of Join : 1st Jan 2013
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <ul className="personal-info">
                      <li>
                        <div className="title">Phone:</div>
                        <div className="text">
                          <a href="">9876543210</a>
                        </div>
                      </li>
                      <li>
                        <div className="title">Email:</div>
                        <div className="text">
                          <a href="">johndoe@example.com</a>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Header;
