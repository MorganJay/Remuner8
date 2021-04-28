import React, { Component } from 'react';
import PageHeader from 'components/Headers/PageHeader';
import '../../assets/css/EmployeeProfile.css';
import Header from '../../components/Employees/Profile/Header.jsx'


export default class EmployeeProfile extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader breadcrumb = "Profile" />
          <Header/>
        </div>
      </div>
    );
  }
}
