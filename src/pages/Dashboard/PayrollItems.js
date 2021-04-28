import React, { Component } from 'react';
import { Row, Col, TabContent } from 'reactstrap';
import swal from '@sweetalert/with-react';

import PageHeader from 'components/Headers/PageHeader';
import MenuTab from 'components/Tabs/MenuTab';
import AdditionsTab from 'components/Tabs/AdditionsTab';
import OvertimeTab from 'components/Tabs/OvertimeTab';
import DeductionsTab from 'components/Tabs/DeductionsTab';

class PayrollItems extends Component {
  state = {
    loading: true,
    payrollItems: null,
    activeTab: '1'
  };

  toggleTab = tab =>
    this.state.activeTab !== tab && this.setState({ activeTab: tab });

  mockUrl = 'https://6077e2b9e7f4f50017183301.mockapi.io/api/payrollitems';
  url = 'https://localhost:44333/api/payrollItems';

  fetchPayrollItems = async () => {
    try {
      const response = await fetch(this.mockUrl);

      if (response.ok) {
        const data = await response.json();
        const { 0: items } = data;
        this.setState({ loading: false, payrollItems: items });
      }
    } catch (error) {
      swal({ text: error.message, title: 'An Error occurred', icon: 'error' });
    }
  };

  componentDidMount() {
    this.fetchPayrollItems();
  }

  render() {
    const { payrollItems, activeTab } = this.state;

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader breadcrumb="Payroll Items" />
          <div className="page-menu px-lg-4">
            <Row>
              <Col sm={12}>
                <MenuTab activeTab={activeTab} toggle={this.toggleTab} />
              </Col>
            </Row>
          </div>

          <TabContent activeTab={activeTab} className="px-lg-4">
            <AdditionsTab
              tabId="1"
              id="tab_additions"
              items={payrollItems && payrollItems.additions}
            />
            <OvertimeTab
              tabId="2"
              id="tab_overtime"
              items={payrollItems && payrollItems.overtime}
            />
            <DeductionsTab
              tabId="3"
              id="tab_deductions"
              items={payrollItems && payrollItems.deductions}
            />
          </TabContent>
        </div>
      </div>
    );
  }
}

export default PayrollItems;
