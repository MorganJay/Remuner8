import React from 'react';
import PropTypes from 'prop-types';
import BTable from 'react-bootstrap/Table';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({
  columns,
  sortColumn,
  onSort,
  headerData,
  bodyData,
  ...props
}) => (
  <BTable
    responsive
    striped
    size="sm"
    style={{ background: '#fff', color: '#333' }}
    {...props}
  >
    <TableHeader
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
      data={headerData}
    />
    <TableBody data={bodyData} columns={columns} />
  </BTable>
);

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  headerData: PropTypes.array.isRequired,
  bodyData: PropTypes.array.isRequired
};

export default Table;
