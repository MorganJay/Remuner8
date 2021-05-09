import React from 'react';
import { Row, Col } from 'reactstrap';

import Card from './Card';
import LoaderRing from 'components/Loading/Loader';

const Grid = ({ employees, toggleEditModal, toggleDeleteModal }) => (
  <Row>
    {!employees ? (
      <LoaderRing />
    ) : (
      employees.map((employee, index) => (
        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
          <Card
            imgSrc={employee.avatar}
            employee={employee}
            key={employee.id}
            toggleEditModal={toggleEditModal}
            toggleDeleteModal={toggleDeleteModal}
          />
        </Col>
      ))
    )}
  </Row>
);

export default Grid;
