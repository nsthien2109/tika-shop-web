import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";

const StoresTable = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const handleModalAddEvent = () => {
    setAddModal(!addModal);
    setEditModal(false);
  };

  const handleModalEditEvent = () => {
    setAddModal(false);
    setEditModal(!editModal);
  };
  return (
    <>
      <div className="table-dashboard card">
        <button
          onClick={handleModalAddEvent}
          className="items-center justify-center hidden rounded-full add-new-button sm:flex">
          <i className="ri-store-3-line"></i>
        </button>
        <table className="table-auto">
          <thead className="header-table">
            <tr>
              <th>Store name</th>
              <th className="hidden md:table-cell">Owner</th>
              <th>Type</th>
              <th className="hidden md:table-cell">Email</th>
              <th className="hidden md:table-cell">Status</th>
              <th className="hidden md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="content-table">
            <tr className="text-center">
              <td>Channel</td>
              <td className="hidden md:table-cell">Thien</td>
              <td>Cosmetics</td>
              <td>nsthien@gmail.com</td>
              <td className="hidden md:table-cell">Active</td>
              <td className="items-center justify-center hidden md:flex">
                <button
                  onClick={handleModalEditEvent}
                  className="flex items-center px-2 py-1 text-white rounded-lg bg-green-500">
                  <i className="ri-eye-line pr-1"></i> View
                </button>
                <button
                  onClick={handleModalEditEvent}
                  className="flex items-center px-2 py-1 text-white mx-2 rounded-lg bg-slate-500">
                  <i className="pr-1 ri-quill-pen-line"></i>Edit
                </button>
                <button className="flex items-center px-2 py-1 text-white bg-red-400 rounded-lg">
                  <i className="pr-1 ri-delete-bin-4-line"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Add modal */}
      <Modal
        isOpen={addModal}
        handleModalEvent={handleModalAddEvent}
        title="Add new users">
        <TextInput
          label="First name"
          type="text"
          placeholder="Enter first name"
        />
        <TextInput
          label="Last name"
          type="text"
          placeholder="Enter last name"
        />
        <TextInput label="Email" type="email" placeholder="Enter user email" />
        <TextInput
          label="Phone number"
          type="tel"
          placeholder="Enter phone number"
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter user password"
        />
        <TextInput
          label="Address"
          type="text"
          placeholder="Enter user address"
        />
        <div className="text-center submit-form">
          <button className="submit-button">Submit</button>
        </div>
      </Modal>

      {/* Edit modal */}
      <Modal
        isOpen={editModal}
        handleModalEvent={handleModalEditEvent}
        title="Edit users">
        <TextInput
          label="First name"
          type="text"
          placeholder="Enter first name"
        />
        <TextInput
          label="Last name"
          type="text"
          placeholder="Enter last name"
        />
        <TextInput
          label="Phone number"
          type="tel"
          placeholder="Enter phone number"
        />
        <TextInput
          label="Address"
          type="text"
          placeholder="Enter user address"
        />
        <div className="text-center submit-form">
          <button className="submit-button">Submit</button>
        </div>
      </Modal>
    </>
  );
};

export default StoresTable;
