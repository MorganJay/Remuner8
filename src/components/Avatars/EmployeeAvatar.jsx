import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DummyImage from 'assets/img/theme/team-1-800x800.jpg';

const EmployeeAvatar = ({ avatar, name }) => (
  <TableAvatar>
    <Avatar to="/admin/employee-profile">
      <Image src={avatar || DummyImage} />
    </Avatar>
    <AvatarLink to="/admin/employee-profile">
      {name}
      <Job>{name}</Job>
    </AvatarLink>
  </TableAvatar>
);

export default EmployeeAvatar;

const TableAvatar = styled.h2`
  display: inline-flex;
  align-items: center;
`;

const Avatar = styled(Link)`
  border-radius: 50%;
  display: inline-block;
  font-weight: 500;
  height: 38px;
  line-height: 38px;
  margin: 0 10px 0 0;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  width: 38px;
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
  width: 100%;
`;

const Job = styled.span`
  color: #525f7f;
  font-size: 12px;
  margin-top: 3px;
`;
