import React, { useState } from 'react';
import { TabPane, Card } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import PayrollOvertimeItems from 'components/Tables/PayrollOvertimeItemsTable';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import OvertimeForm from 'components/Forms/Payroll-Items/OvertimeForm';

const OvertimeTab = ({ items, ...props }) => {
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
            style={{ padding: '0.625rem 0.25rem' }}
          >
            <i className="fa fa-plus"></i> Add Overtime
          </CustomButton>
        </div>
        <Card className="payroll-table">
          <div className="table-responsive overflow-hidden">
            <PayrollOvertimeItems
              items={items && items}
              onEdit={handleEdit}
              onDelete={toggleDeleteModal}
            />
          </div>
        </Card>
      </TabPane>

      <CustomModal
        label="Add Overtime"
        isOpen={addModalOpen}
        toggle={toggleAddModal}
      >
        <OvertimeForm toggle={toggleAddModal} />
      </CustomModal>
      <CustomModal
        label="Edit Overtime"
        isOpen={editModalOpen}
        toggle={handleEdit}
      >
        <OvertimeForm data={formData} toggle={handleEdit} />
      </CustomModal>
      <DeleteModal
        isOpen={deleteModalOpen}
        toggle={toggleDeleteModal}
        label="Delete Overtime"
      >
        Are you sure you want to delete this item?
      </DeleteModal>
    </>
  );
};

export default OvertimeTab;
