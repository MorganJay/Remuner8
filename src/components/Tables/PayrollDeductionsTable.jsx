import React from 'react';
import { Table } from 'reactstrap';

import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import LoaderRing from 'components/Loading/Loader';

const PayrollDeductionItems = ({ items, onEdit, onDelete }) => {
  if (!items) return <LoaderRing />;

  return (
    <Table className="align-items-center text-dark" striped hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th className="text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>&#8358;{item.amount}</td>
            <td className="text-right">
              <ActionToggle
                toggleEditModal={() => onEdit(item)}
                toggleDeleteModal={onDelete}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PayrollDeductionItems;
