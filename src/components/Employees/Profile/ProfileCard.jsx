import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle } from 'reactstrap';

import EditIcon from './EditIcon';

const ProfileCard = ({ title, children, className, toggleModal }) => {
  return (
    <Card className="profile-box flex-fill">
      <CardBody style={{ padding: '1.25rem 2rem' }}>
        <CardTitle>
          {title}
          <EditIcon toggle={toggleModal} />
        </CardTitle>
        {children}
      </CardBody>
    </Card>
  );
};

ProfileCard.defaultProps = {
  title: 'Card Title Here',
  children: 'Hello World'
};

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default ProfileCard;
