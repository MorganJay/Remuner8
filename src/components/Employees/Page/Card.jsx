import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AvatarLink } from 'components/Avatars/EmployeeAvatar';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import { AppContext } from 'context/store';
import { saveEmployee } from 'services/employeeService';

const Card = ({ imgSrc, employee, toggleEditModal, toggleDeleteModal }) => {
  const {
    events: { clickEmployee }
  } = useContext(AppContext);

  const { name, employee_id } = employee;

  const handleEmployeeSelect = employee => {
    clickEmployee(employee);
    saveEmployee(employee);
  };

  return (
    <ProfileWidget>
      <ProfileImg>
        <Avatar
          to="/admin/employees/profile"
          onClick={() => handleEmployeeSelect(employee)}
        >
          <img src={imgSrc} alt="A fine employee" />
        </Avatar>
      </ProfileImg>
      <Dropdown>
        <ActionToggle
          direction="left"
          toggleEditModal={toggleEditModal}
          toggleDeleteModal={toggleDeleteModal}
        />
      </Dropdown>
      <UserName>
        <AvatarLink
          to="/admin/employees/profile"
          onClick={() => handleEmployeeSelect(employee)}
        >
          {name}
        </AvatarLink>
      </UserName>
      <div className="small text-muted">{employee_id}</div>
    </ProfileWidget>
  );
};

export default Card;

const ProfileWidget = styled.div`
  background-color: #fff;
  border: 1px solid #ededed;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
  overflow: hidden;
`;

const ProfileImg = styled.div`
  cursor: pointer;
  height: 80px;
  margin: 0 auto;
  position: relative;
  width: 80px;
`;

const Dropdown = styled.div`
  position: absolute;
  right: 5px;
  text-align: right;
  top: 10px;
`;

const UserName = styled.h4`
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1f1f1f;
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 1.125rem;
`;

const Avatar = styled(Link)`
  font-size: 24px;
  height: 80px;
  line-height: 80px;
  margin: 0;
  width: 80px;
  background-color: #aaa;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  position: relative;
  white-space: nowrap;

  img {
    border-radius: 50%;
    display: block;
    overflow: hidden;
    width: 100%;
    min-height: 80px;
  }
`;
