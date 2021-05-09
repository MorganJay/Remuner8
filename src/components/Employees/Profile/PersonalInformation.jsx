import React from 'react';

import ProfileCard from './ProfileCard';
import DataList from './DataList';

const data = [
  { title: 'NIN', text: '1234567890' },
  { title: 'Tel', text: '08165336114' },
  { title: 'Nationality', text: 'Indian' },
  { title: 'Religion', text: 'Christianity' },
  { title: 'Marital Status', text: 'Married' }
];

const PersonalInformation = ({ toggle }) => {
  const title = 'Personal Information';
  return (
    <>
      <ProfileCard title={title} toggleModal={toggle}>
        <DataList data={data} />
      </ProfileCard>
    </>
  );
};

export default PersonalInformation;
