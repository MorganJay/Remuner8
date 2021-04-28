import React, { Component } from 'react';
import { Row } from 'reactstrap';
import dateFormat from 'dateformat';
import { paginate } from 'utils/paginate';

import Avatar from 'components/Avatars/EmployeeAvatar';
import LoaderRing from 'components/Loading/Loader';
import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import SelectTableLength from './SelectTableLength';

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      sortColumn: { path: 'employeeId', order: 'asc' },
      start: 1,
      end: 10
    };
  }

  columns = [
    {
      path: 'name',
      label: 'Name',
      content: employee => <Avatar employee={employee} />
    },
    { path: 'employee_id', label: 'Employee ID' },
    { path: 'email', label: 'Email' },
    { path: 'phone_number', label: 'Phone Number' },
    { path: 'join_date', label: 'Join Date' },
    { path: 'department', label: 'Department' },
    {
      key: 'Action',
      label: 'Action',
      content: employee => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(employee)}
          toggleDeleteModal={this.props.onDelete}
        />
      )
    }
  ];

  formatDates = data =>
    data
      ? data.map(data => {
          data.join_date = dateFormat(data.join_date, 'dd/mm/yyyy');
          return data;
        })
      : [];

  handlePageChange = page => this.setState({ currentPage: page });

  handlePrevious = page => this.setState({ currentPage: page - 1 });

  handleNext = page => this.setState({ currentPage: page + 1 });

  handlePageSizeChange = value => this.setState({ pageSize: Number(value) });

  handleSort = sortColumn => this.setState({ sortColumn });

  getPagedData = () => {
    const { data } = this.props;
    if (!data) return null;
    const { pageSize, currentPage } = this.state;
    const bodyData = data && paginate(data, currentPage, pageSize);

    return { totalCount: data.length, bodyData };
  };

  render() {
    const { loading, data, table } = this.props;

    if (loading) return <LoaderRing />;

    const { start, end, pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, bodyData } = this.getPagedData();
    const employees = this.formatDates(bodyData);
    return (
      <div className="table-wrapper">
        <Table
          className="align-items-center table-flush"
          columns={this.columns}
          headerData={data}
          bodyData={employees}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
        {!table && (
          <Row className="align-items-baseline justify-content-lg-between mt-4">
            <TableInfo
              start={start}
              end={totalCount < 10 ? totalCount : end}
              total={totalCount}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
              onPageSizeChange={this.handlePageSizeChange}
              onPrevious={this.handlePrevious}
              onNext={this.handleNext}
            />
            <SelectTableLength togglePageSize={this.handlePageSizeChange} />
          </Row>
        )}
      </div>
    );
  }
}

export default EmployeeTable;
