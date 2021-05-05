import React, { Component } from 'react';
import { Row } from 'reactstrap';
import dateFormat from 'dateformat';
import { paginate } from 'utils/paginate';

import Avatar from 'components/Avatars/EmployeeAvatar';
import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import StatusDropDown from 'components/Forms/Leave/StatusDropdown';
import SelectTableLength from './SelectTableLength';

class LeaveTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      sortColumn: { path: 'employee', order: 'asc' },
      start: 1,
      end: 10
    };
  }

  columns = [
    {
      path: 'employee',
      label: 'Employee',
      content: employee => <Avatar employee={employee} />
    },
    { path: 'leaveType', label: 'Leave Type' },
    { path: 'from', label: 'From' },
    { path: 'to', label: 'To' },
    { path: 'days', label: 'No Of Days', content: ({days}) => <>{days} {days === "1" ? 'day' : 'days'}</> },
    { path: 'reason', label: 'Reason' },
    {
      key: 'status',
      label: 'Status',
      content: leave => <StatusDropDown leave={leave} />
    },
    {
      key: 'Action',
      label: 'Action',
      content: leave => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(leave)}
          toggleDeleteModal={this.props.onDelete}
        />
      )
    }
  ];

  formatDates = data =>
    data
      ? data.map(data => {
          data.from = dateFormat(data.from, 'dd mmm yyyy');
          data.to = dateFormat(data.to, 'dd mmm yyyy');
          return data;
        })
      : [];

  handlePageChange = page => this.setState({ currentPage: page });

  handlePrevious = page => this.setState({ currentPage: page - 1 });

  handleNext = page => this.setState({ currentPage: page + 1 });

  handlePageChange = page => this.setState({ currentPage: page });

  handlePageSizeChange = value => this.setState({ pageSize: Number(value) });

  handleSort = sortColumn => this.setState({ sortColumn });

  getPagedData = () => {
    const { data } = this.props;
    if (!data) return null;
    const { pageSize, currentPage } = this.state;
    const leaves = data && paginate(data, currentPage, pageSize);

    return { totalCount: data.length, data: leaves };
  };

  render() {
    const { data } = this.props;
    const { start, end, pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: leaves } = this.getPagedData();
    const formattedLeaves = this.formatDates(leaves);

    return (
      <div className="table-wrapper">
        <Table
          className="align-items-center mt-3"
          columns={this.columns}
          headerData={data}
          bodyData={formattedLeaves}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
        <Row className="align-items-baseline justify-content-lg-between mt-3">
          <TableInfo start={start} end={end} total={totalCount} />
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
      </div>
    );
  }
}

export default LeaveTable;
