import React from 'react';
import { PropTypes } from 'prop-types';

const EditIcon = ({ toggle }) => (
  <button className="edit-icon" onClick={toggle}>
    <i className="fas fa-pencil-alt"></i>
  </button>
);

EditIcon.propTypes = {
  toggle: PropTypes.func.isRequired
}

export default EditIcon;
