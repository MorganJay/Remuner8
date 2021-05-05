import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import { Container, Row, Col } from 'reactstrap';
// import { AppContext } from "context/store";

// core components
import { chartOptions, parseOptions } from 'variables/charts.js';

import Header from 'components/Dashboard/Header';
import SummaryCards from 'components/Dashboard/SummaryCards';
import EmployeeCard from 'components/Dashboard/EmployeeCard';
import PerformanceChart from 'components/Dashboard/PerformanceChart';
import RevenueChart from 'components/Dashboard/RevenueChart';

const Index = () => {
  //const { state, events } = useContext(AppContext);

  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState('data1');
  const [statistics, setStatistics] = useState({});

  const url = 'https://localhost:44333/api/statistics';

  if (window.Chart) parseOptions(Chart, chartOptions());

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data('data' + index);
  };

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const data = await fetch(url).then(res => res.json());
        setStatistics(data);
      } catch (error) {}
    };
    fetchStatistics();
  }, []);

  const { departments, employees } = statistics;

  return (
    <>
      <Header employeeCount={employees} departmentCount={departments} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <RevenueChart
              activeNav={activeNav}
              chartExample1Data={chartExample1Data}
              toggleNavs={toggleNavs}
            />
          </Col>
          <Col xl="4">
            <PerformanceChart />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <SummaryCards overallEmployees={employees} />
          </Col>
        </Row>

        {/* Employee card with table */}
        <Row className="mt-5 justify-content-center">
          <Col className="mb-5 mb-xl-0">
            <EmployeeCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
