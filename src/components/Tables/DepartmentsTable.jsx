import React, { Component } from 'react';
import { Row } from 'reactstrap';

import { paginate } from 'utils/paginate';

import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';

class DepartmentsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      sortColumn: { path: 'id', order: 'asc' },
      start: 1,
      end: 10
    };
  }

  columns = [
    { path: 'id', label: '#' },
    { path: 'departmentName', label: 'Department' },
    {
      key: 'Action',
      label: 'Action',
      content: department => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(department)}
          toggleDeleteModal={this.props.onDelete}
        />
      )
    }
  ];

  handlePageChange = page => this.setState({ currentPage: page });

  handlePageSizeChange = value => this.setState({ pageSize: Number(value) });

  handleSort = sortColumn => this.setState({ sortColumn });

  getPagedData = () => {
    const { data } = this.props;
    const { pageSize, currentPage } = this.state;
    const departments = data && paginate(data, currentPage, pageSize);

    return { totalCount: data.length, data: departments };
  };

  render() {
    const { data } = this.props;
    const { start, end, pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: departments } = this.getPagedData();

    return (
      <div className="table-wrapper">
        <Table
          className="align-items-center my-3"
          columns={this.columns}
          headerData={data}
          bodyData={departments}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
        <Row className="align-items-baseline justify-content-lg-between mt-2">
          <TableInfo start={start} end={end} total={totalCount} />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            onPageSizeChange={this.handlePageSizeChange}
          />
        </Row>
      </div>
    );
  }
}

export default DepartmentsTable;
