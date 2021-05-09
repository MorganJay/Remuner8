import React from 'react';

import ProfileCard from './ProfileCard';

const PersonalInformation = ({ employee, toggle }) => {
  return (
    <ProfileCard title="Personal Information" toggleModal={toggle}>
      <ul className="personal-info">
        <li>
          <div className="title">Date of Birth</div>
          <div className="text">19 July 2021</div>
        </li>
        <li>
          <div className="title">Gender</div>
          <div className="text">Male</div>
        </li>
        <li>
          <div className="title">Nationality</div>
          <div className="text">Nigerian</div>
        </li>
        <li>
          <div className="title">State of Origin</div>
          <div className="text">Abia</div>
        </li>
      </ul>
    </ProfileCard>
  );
};

export default PersonalInformation;
