import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Header from 'components/Payroll/Header';
import InputRow from 'components/Payroll/InputRow';
import LoaderRing from 'components/Loading/Loader';
import PayrollTable from 'components/Tables/PayrollTable';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import SalaryForm from 'components/Forms/Payroll/SalaryForm';
import 'assets/css/page.styles.css';

class Payroll extends Component {
  state = {
    loading: true,
    formData: [],
    payroll: [],
    addModalOpen: false,
    editModalOpen: false,
    deleteModalOpen: false
  };
  toggleAddModal = () =>
    this.setState({ addModalOpen: !this.state.addModalOpen });

  toggleEditModal = () => this.setState({ editModalOpen: !this.state.editModalOpen });

  toggleDeleteModal = () =>
    this.setState({ deleteModalOpen: !this.state.deleteModalOpen });

  handleEdit = object =>
    this.setState({
      formData: [object],
      editModalOpen: !this.state.editModalOpen
    });
  mockUrl = 'https://6077e2b9e7f4f50017183301.mockapi.io/api/payroll';
  url = 'https://localhost:44333/api/payroll';

  fetchEmployees = async () => {
    try {
      const response = await fetch(this.mockUrl);

      if (response.ok) {
        const data = await response.json();
        this.setState({ loading: false, payroll: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  render() {
    const {
      loading,
      payroll,
      addModalOpen,
      editModalOpen,
      deleteModalOpen,
      formData
    } = this.state;

    const { history } = this.props;
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Header toggleModal={this.toggleAddModal} />
          <InputRow />
          <Row>
            <Col md={12}>
            {loading ? (
              <LoaderRing />
            ) : (
              <PayrollTable
                data={payroll}
                onEdit={this.handleEdit}
                onDelete={this.toggleDeleteModal}
                history={history}
              />
            )}
            </Col>
          </Row>
        </div>
        <CustomModal
          label="Add Salary"
          isOpen={addModalOpen}
          toggle={this.toggleAddModal}
        >
          <SalaryForm toggle={this.toggleAddModal} />
        </CustomModal>
        <CustomModal
          label="Edit Salary"
          isOpen={editModalOpen}
          toggle={this.toggleEditModal}
        >
          <SalaryForm data={formData} toggle={this.toggleAddModal} />
        </CustomModal>
        <DeleteModal
          isOpen={deleteModalOpen}
          toggle={this.toggleDeleteModal}
          label="Delete Salary"
        >
          Are you sure you want to delete this record?
        </DeleteModal>
      </div>
    );
  }
}

export default Payroll;
