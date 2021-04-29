import React from 'react';
import { Form, Row, Button } from 'reactstrap';

const CustomForm = ({ children, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        {Array.isArray(children) ? children.map(child => child) : children}
      </Row>
      <Row className="justify-content-center mt-2">
        <Button color="primary" type="submit" style={{ minWidth: '200px' }}>
          SAVE
        </Button>
      </Row>
    </Form>
  );
};

export default CustomForm;
