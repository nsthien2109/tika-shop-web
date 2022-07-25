import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";

const UsersTable = () => {
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
          <i className="ri-user-add-line"></i>
        </button>
        <table className="table-auto">
          <thead className="header-table">
            <tr>
              <th>First Name</th>
              <th className="hidden md:table-cell">Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="hidden md:table-cell">Address</th>
              <th className="hidden md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="content-table">
            <tr className="text-center">
              <td>Si Thien</td>
              <td className="hidden md:table-cell">Nguyen</td>
              <td>thien@gmail.com</td>
              <td>0705459542</td>
              <td className="hidden md:table-cell">Kwang Ping</td>
              <td className="items-center justify-around hidden md:flex">
                <button
                  onClick={handleModalEditEvent}
                  className="flex items-center px-2 py-1 text-white rounded-lg bg-slate-500">
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

export default UsersTable;
