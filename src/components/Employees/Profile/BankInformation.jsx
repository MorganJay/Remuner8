import React from 'react';

import ProfileCard from './ProfileCard';

const BankInformation = ({ employee, toggle }) => {
  return (
    <ProfileCard title='Bank Information' toggleModal={toggle}>
      <ul className="personal-info">
        <li>
          <div className="title">Bank</div>
          <div className="text">Access Bank</div>
        </li>
        <li>
          <div className="title">Account Number</div>
          <div className="text">0787659961</div>
        </li>
      </ul>
    </ProfileCard>
  );
};

export default BankInformation;
