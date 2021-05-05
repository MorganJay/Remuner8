import React from 'react';
import styled, { css } from 'styled-components';
import { UncontrolledTooltip } from 'reactstrap';

const TableHeader = ({ sortColumn, data, onSort, columns }) => {
  const sortData = (sortColumn, data) => {
    const { path, order } = sortColumn;

    switch (order) {
      case 'asc':
        data.sort((a, b) =>
          typeof a[path] === 'number'
            ? a[path] - b[path]
            : a[path].localeCompare(b[path])
        );
        break;

      case 'desc':
        data.sort((a, b) =>
          typeof b[path] === 'number'
            ? b[path] - a[path]
            : b[path].localeCompare(a[path])
        );
        break;

      default:
        break;
    }
  };

  const raiseSort = path => {
    const sortColumnCopy = { ...sortColumn };
    if (sortColumnCopy.path === path) {
      sortColumnCopy.order = sortColumnCopy.order === 'asc' ? 'desc' : '';
      if (sortColumnCopy.order === '') sortColumnCopy.order = 'asc';
    } else {
      sortColumnCopy.path = path;
      sortColumnCopy.order = 'asc';
    }

    onSort(sortColumnCopy);
    sortData(sortColumnCopy, data);
  };

  const getSortText = sortColumn =>
    sortColumn.order === 'asc' ? 'descending' : 'ascending';

  return (
    <thead>
      <tr>
        {columns ? (
          columns.map((column, index) => (
            <Th
              key={index}
              order={sortColumn.order}
              active={sortColumn.path === column.path}
              onClick={() => raiseSort(column.path)}
              tabIndex={0}
              sort={column.path}
              style={{ fontSize: '1.6ch' }}
              id={column.path}
            >
              {column.path ? (
                <UncontrolledTooltip
                  key={`tooltip${index}`}
                  placement="top"
                  target={column.path}
                >
                  {`Click to sort by ${
                    sortColumn.path === column.path
                      ? getSortText(sortColumn)
                      : 'ascending'
                  }`}
                </UncontrolledTooltip>
              ) : null}
              {column.label}
            </Th>
          ))
        ) : (
          <th>No data</th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;

// Styled components
const sortStyles = css`
  cursor: pointer;
  position: relative;

  // ascending icon
  &::before {
    right: -0.3em;
    content: '\\2191';
    position: absolute;
    bottom: 0.5em;
    display: block;
    opacity: 0.5;
    font-size: 1.2rem;
    ${props =>
      props.order === 'asc' &&
      props.active &&
      css`
        opacity: 1;
      `}
  }

  &::after {
    right: -0.7em;
    content: '\\2193';
    position: absolute;
    bottom: 0.4em;
    display: block;
    font-size: 1.2rem;
    opacity: 0.5;
    ${props =>
      props.order === 'desc' &&
      props.active &&
      css`
        opacity: 1;
      `}
  }
`;

const getSortStyles = props => props.sort && sortStyles;

export const Th = styled.th`
  font-weight: 600;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #dee2e6;
  font-size: 0.9375rem;
  ${getSortStyles}
  white-space: normal !important;
  padding-left: 25px !important;
  &:last-child {
    text-align: center;
  }
`;
