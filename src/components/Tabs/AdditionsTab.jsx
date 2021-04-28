import React, { useState } from 'react';
import { TabPane, Card } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import PayrollAdditionItems from 'components/Tables/PayrollAdditionItemsTable';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import AdditionForm from 'components/Forms/Payroll-Items/AdditionForm';

const AdditionsTab = ({ items, ...props }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState([]);

  const toggleAddModal = () => setAddModalOpen(!addModalOpen);

  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);

  const handleEdit = object => {
    setFormData([object]);
    setEditModalOpen(!editModalOpen);
  };

  return (
    <>
      <TabPane {...props}>
        <div className="text-right my-4 clearfix">
          <CustomButton
            className="btn add-btn mr-0 float-right"
            data-toggle="modal"
            data-target="#add_addition"
            onClick={toggleAddModal}
            style={{ padding: '0.625rem 0.02rem' }}
          >
            <i className="fa fa-plus mr-2"></i> Add Addition
          </CustomButton>
        </div>
        <Card className="payroll-table">
          <div className="table-responsive overflow-hidden">
            <PayrollAdditionItems
              items={items && items}
              onEdit={handleEdit}
              onDelete={toggleDeleteModal}
            />
          </div>
        </Card>
      </TabPane>

      <CustomModal
        label="Add Addition"
        isOpen={addModalOpen}
        toggle={toggleAddModal}
      >
        <AdditionForm toggle={toggleAddModal} />
      </CustomModal>
      <CustomModal
        label="Edit Addition"
        isOpen={editModalOpen}
        toggle={handleEdit}
      >
        <AdditionForm data={formData} toggle={toggleAddModal} />
      </CustomModal>
      <DeleteModal
        isOpen={deleteModalOpen}
        toggle={toggleDeleteModal}
        label="Delete Addition"
      >
        Are you sure you want to delete this item?
      </DeleteModal>
    </>
  );
};

export default AdditionsTab;
