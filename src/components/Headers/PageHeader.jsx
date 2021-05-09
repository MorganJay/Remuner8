import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ children, match, button, breadcrumb }) => {
  const title = match.url.slice(7);
  return (
    <div className="page-header">
      <Row className="align-items-center pr-md-4 mt-md--4">
        <Col sm={6} md={6}>
          <h3 className="page-title text-capitalize">{breadcrumb || title}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <BreadcrumbItem to="/admin">Dashboard</BreadcrumbItem>
            </li>
            <li className="breadcrumb-item active text-capitalize">{breadcrumb || title}</li>
          </ul>
        </Col>
        <ButtonsContainer>
          {button}
          <div className="view-icons row flex-nowrap float-right">
            {children}
          </div>
        </ButtonsContainer>
      </Row>
    </div>
  );
};

export default withRouter(Header);

const ButtonsContainer = styled.div`
  margin: 0 auto;
  float: right;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 0 0;
  max-width: 100%;
  position: relative;
  width: 100%;
  margin-top: 1.5rem;
  flex-direction: column-reverse;
  gap: 1.4em;

  @media (min-width: 360px) {
    flex-flow: row-reverse nowrap;
  }

  @media (min-width: 768px) {
    gap: 2em;
    justify-content: space-around;
    margin-top: 2rem;
  }

  @media (min-width: 1200px){
    justify-content: space-between;
  }
`;

const BreadcrumbItem = styled(Link)`
  &:hover {
    color: #ddd;
  }
`;
