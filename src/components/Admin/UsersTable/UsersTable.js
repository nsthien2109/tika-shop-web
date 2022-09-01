import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";
import UserItem from "./UserItem";

const UsersTable = ({
  userList,
  handleCreateUser,
  handleDeletUser,
  handleUpdateUser,
}) => {
  const [addModal, setAddModal] = useState(false);
  /** */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  /** */
  const handleModalAddEvent = () => {
    setAddModal(!addModal);
  };

  const createUser = (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      password,
      role: "user",
    };

    handleCreateUser(userData);
    setAddModal(!addModal);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  const deleteUser = (id) => {
    handleDeletUser(id);
  };

  const updateUser = (dataUpdate, id) => {
    handleUpdateUser(dataUpdate, id);
  };
  return (
    <>
      <div
        className={`${
          userList?.message === "Success" ? "table-dashboard card" : "hidden"
        }`}>
        <button
          onClick={handleModalAddEvent}
          className="items-center justify-center hidden rounded-full add-new-button sm:flex">
          <i className="ri-user-add-line"></i>
        </button>
        <table className="table-auto">
          <thead className="header-table">
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th className="hidden md:table-cell">Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="hidden md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="content-table">
            {userList &&
              userList?.data.map((user) => {
                return (
                  <UserItem
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    updateUser={updateUser}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      <div
        className={`w-full h-full text-center uppercase text-2xl text-red-500 ${
          userList?.message !== "Success" ? "" : "hidden"
        }`}>
        {userList?.message}
      </div>
      {/* Add modal */}
      <Modal
        isOpen={addModal}
        handleModalEvent={handleModalAddEvent}
        title="Add new users">
        <form onSubmit={createUser}>
          <TextInput
            label="First name"
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextInput
            label="Last name"
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextInput
            label="Phone number"
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter user password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="text-center submit-form">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UsersTable;
