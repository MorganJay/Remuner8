import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from 'reactstrap';

import { AppContext } from 'context/store';
import auth from '../../services/authService';

import AdminImage from '../../assets/img/theme/adminImage.jfif';

const AdminNavbar = props => {
  const appContext = useContext(AppContext);
  const { userName } = auth.currentUser;

  return (
    <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
      <Container
        className="justify-content-end justify-content-lg-between"
        fluid
      >
        <span className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
          {props.brandText}
        </span>
        <Nav className="align-items-center d-none d-md-flex" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle className="pr-0" nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="Admin Img" src={AdminImage} />
                </span>
                <Media className="ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm font-weight-bold">
                    {userName || 'Admin'}
                  </span>
                </Media>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My Profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem to="/logout" tag={Link}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
