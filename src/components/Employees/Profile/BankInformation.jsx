import React from 'react';

import ProfileCard from './ProfileCard';
import DataList from './DataList';

const BankInformation = ({ toggle }) => {
  const title = 'Bank Information';
  return (
    <>
      <ProfileCard title={title} toggleModal={toggle}>
        <DataList />
      </ProfileCard>
    </>
  );
};

export default BankInformation;
