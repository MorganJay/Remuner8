import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled, { css } from 'styled-components';
import SelectTableLength from './SelectTableLength';

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
  onPageSizeChange
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <Col
      sm={12}
      md={7}
      className="pt-3 pt-sm-0 justify-content-around d-flex align-items-center"
    >
      <div className="dataTables_paginate paging_simple_numbers ">
        <nav aria-label="Departments Page navigation">
          <ul className="pagination justify-content-center justify-content-lg-end px-lg-4 mb-0">
            <li className="page-item" title="Previous Page">
              <Button className="page-link" disabled={currentPage === 1}>
                Previous
              </Button>
            </li>
            {pages.map(page => (
              <li
                key={page}
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
              >
                <Button
                  className="page-link"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </Button>
              </li>
            ))}
            <li className="page-item" title="Next Page">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
      <SelectTableLength togglePageSize={onPageSizeChange} />
    </Col>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired
};

export default Pagination;

const Button = styled.button`
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: unset !important;
    `}
`;
