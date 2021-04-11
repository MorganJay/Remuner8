import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';

import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';
import SearchRow from 'components/Employees/Page/SearchRow';
import Grid from 'components/Employees/Page/Grid';
import EmployeeTable from 'components/Tables/EmployeeTable';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import EmployeeForm from 'components/Forms/Employees/EmployeeForm';
import Custom404 from 'pages/404';

class Employees extends Component {
  state = {
    loading: true,
    formData: [],
    employees: [],
    addModalOpen: false,
    editModalOpen: false,
    deleteModalOpen: false
  };

  toggleAddModal = () =>
    this.setState({ addModalOpen: !this.state.addModalOpen });

  toggleEditModal = () => {
    this.setState({ editModalOpen: !this.state.editModalOpen });
  };

  toggleDeleteModal = () =>
    this.setState({ deleteModalOpen: !this.state.deleteModalOpen });

  handleEdit = object =>
    this.setState({
      formData: [object],
      editModalOpen: !this.state.editModalOpen
    });

  fetchEmployees = async () => {
    try {
      const res = await fetch(
        'https://604529e6c0194f00170bca44.mockapi.io/api/jk'
      );

      if (res.ok) {
        const users = await res.json();
        this.setState({ loading: false, employees: users });
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
      employees,
      addModalOpen,
      editModalOpen,
      deleteModalOpen
    } = this.state;

    const {
      history,
      location: { pathname }
    } = this.props;

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader
            button={
              <CustomButton
                className="btn add-btn mr-0 float-right"
                onClick={this.toggleAddModal}
              >
                <i className="fa fa-plus"></i> Add Employee
              </CustomButton>
            }
          >
            <Button
              className={pathname.includes('all') ? 'btn-link' : null}
              onClick={() => history.push('/admin/employees/all')}
            >
              <i className="fa fa-th"></i>
            </Button>
            <Button
              className={pathname.includes('list') ? 'btn-link' : null}
              onClick={() => history.push('/admin/employees/employees-list')}
            >
              <i className="fa fa-bars"></i>
            </Button>
          </PageHeader>
          <SearchRow />
          <Switch>
            <Route
              path="/admin/employees/all"
              render={() => (
                <Grid
                  loading={loading}
                  employees={employees}
                  toggleEditModal={this.handleEdit}
                  toggleDeleteModal={this.toggleDeleteModal}
                />
              )}
            />
            <Route
              path="/admin/employees/employees-list"
              render={() => (
                <EmployeeTable
                  loading={loading}
                  data={employees}
                  onEdit={this.handleEdit}
                  onDelete={this.toggleDeleteModal}
                />
              )}
            />
            <Route
              path="/admin/employees/profile"
              render={() => <Custom404 />}
            />
            <Redirect exact from="/admin/employees" to="/admin/employees/all" />
          </Switch>
        </div>
        <CustomModal
          label="Add Employee"
          isOpen={addModalOpen}
          toggle={this.toggleAddModal}
        >
          <EmployeeForm
           // data={this.state.formData}
            toggle={this.toggleAddModal}
          />
        </CustomModal>
        <CustomModal
          label="Edit Employee"
          isOpen={editModalOpen}
          toggle={this.toggleEditModal}
        >
          <EmployeeForm
            data={this.state.formData}
            toggle={this.toggleEditModal}
            readOnly
          />
        </CustomModal>
        <DeleteModal
          isOpen={deleteModalOpen}
          toggle={this.toggleDeleteModal}
          label="Delete Employee"
        >
          Are you sure you want to delete this employee?
        </DeleteModal>
      </div>
    );
  }
}

export default Employees;
