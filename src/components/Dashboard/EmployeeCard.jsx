import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Button, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import EmployeeTable from 'components/Tables/EmployeeTable';

const EmployeeCard = props => {
  const [state, setState] = useState({
    loading: true,
    employees: null
  });

  useEffect(() => {
    fetch('https://604529e6c0194f00170bca44.mockapi.io/api/jk')
      .then(res => res.json())
      .then(
        users => setState({ loading: false, employees: users }),
        error => console.log(error)
      );
  }, []);

  const { loading, employees } = state;

  const slicedEmployees = !loading ? employees.slice(0, 5) : null;

  return (
    <>
      <Card className="shadow">
        <CardHeader className="border-0">
          <Row className="align-items-stretch">
            <Col>
              <h3 className="mb-0">Employees</h3>
            </Col>
            <Col className="text-right">
              <Button
                color="primary"
                onClick={() =>
                  props.history.push('/admin/employees/employees-list')
                }
                size="sm"
              >
                See all
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <EmployeeTable loading={loading} data={slicedEmployees} table />
      </Card>
    </>
  );
};

export default withRouter(EmployeeCard);
