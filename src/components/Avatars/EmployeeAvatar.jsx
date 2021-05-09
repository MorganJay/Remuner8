import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DummyImage from 'assets/img/theme/team-1-800x800.jpg';
import { saveEmployee } from './../../services/employeeService';
import { AppContext } from 'context/store';

const EmployeeAvatar = ({ employee }) => {
  const {
    events: { clickEmployee }
  } = useContext(AppContext);

  if (!employee) return null;

  const { name, avatar } = employee;


  const handleEmployeeSelect = employee => {
    clickEmployee(employee);
    saveEmployee(employee);
  };

  return (
    <TableAvatar>
      <Avatar
        to="/admin/employees/profile"
        onClick={() => handleEmployeeSelect(employee)}
      >
        <Image src={avatar} />
      </Avatar>
      <AvatarLink
        to="/admin/employees/profile"
        onClick={() => handleEmployeeSelect(employee)}
      >
        {name || employee.employee}
        <Job>{name || employee.job || employee.employee}</Job>
      </AvatarLink>
    </TableAvatar>
  );
};

EmployeeAvatar.defaultProps = {
  name: 'John Doe',
  avatar: DummyImage
};

export default EmployeeAvatar;

const TableAvatar = styled.h2`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

const Avatar = styled(Link)`
  border-radius: 50%;
  display: inline-block;
  font-weight: 500;
  height: auto;
  line-height: 38px;
  margin: 0 10px 0 0;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  width: 40px;
  min-width: 40px;
  position: relative;
  white-space: nowrap;
`;

export const AvatarLink = styled(Link)`
  color: #1f1f1f;
  display: inline-grid;
  margin-bottom: 0;
`;

const Image = styled.img`
  border-radius: 50%;
  display: block;
  overflow: hidden;
  height: 40px;
  width: inherit;
`;

const Job = styled.span`
  color: #525f7f;
  font-size: 12px;
  margin-top: 3px;
`;
