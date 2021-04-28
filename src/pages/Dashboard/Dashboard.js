import React, { useRef, useEffect } from 'react';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
import { Container } from 'reactstrap';
// core components
import AdminNavbar from 'components/Navbars/AdminNavbar';
import AdminFooter from 'components/Footers/AdminFooter';
import Sidebar from 'components/Sidebar/Sidebar';
import { MainContent } from 'components/Dashboard/MainContent';
// Anon image
import Remuner8Logo from 'assets/img/brand/profile3.png';
// Sidebar menu items
import routes from 'variables/routes';

import EmployeeProfile from 'pages/Dashboard/EmployeeProfile';


const Dashboard = props => {
  const mainContent = useRef(null);
  const location = useLocation();
  const {
    0: dashboardRoutes,
    1: employeeRoutes,
    2: hrRoutes,
    3: administrationRoutes
  } = routes;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = routes => {
    return routes.map((route, index) => {
      if (route.layout === '/admin') {
        return (
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={index}
          />
        );
      } else return null;
    });
  };

  const getBrandText = () => {
    let brandText = null;
    // routes.forEach(route => {
    //   for (let i = 0; i < route.length; i++) {
    //     let pathname = route[i].layout + route[i].path;
    //     if (props.location.pathname === pathname) brandText = route[i].name;
    //   }
    // });
    // return brandText
    for (let i = 0; i < dashboardRoutes.length; i++) {
      let pathname = dashboardRoutes[i].layout + dashboardRoutes[i].path;
      if (props.location.pathname === pathname)
        brandText = dashboardRoutes[i].name;
    }
    return brandText;
  };

  return (
    <>
      <Sidebar
        {...props}
        dashboardRoutes={dashboardRoutes}
        employeeRoutes={employeeRoutes}
        hrRoutes={hrRoutes}
        administrationRoutes={administrationRoutes}
        logo={{
          innerLink: '/',
          imgSrc: Remuner8Logo,
          imgAlt: 'Remuner8 Logo'
        }}
      />
      <MainContent className="main-content" ref={mainContent}>
        <AdminNavbar {...props} brandText={getBrandText()} />
        <Switch>
          {getRoutes(dashboardRoutes)}
          {getRoutes(employeeRoutes)}
          {getRoutes(hrRoutes)}
          {getRoutes(administrationRoutes)}
          <Redirect exact from="/admin" to="/admin/index" />
          <Route path="/admin/employee/profile" component={EmployeeProfile} />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </MainContent>
    </>
  );
};

export default Dashboard;
