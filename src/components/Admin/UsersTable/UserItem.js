import React,{useState} from 'react';
import Modal from "../../Modal/Modal";
import TextInput from "../../InputTextAuth";

const UserItem = ({user,deleteUser, updateUser}) => {
    const [fName, setFname] = useState(user.firstName);
    const [lName, setLname] = useState(user.lastName);
    const [phoneNumber, setPhoneNumber] = useState(user.phone);
    const [editForm, setEditForm] = useState(false);

    const openEditForm = () => {
        setEditForm(!editForm);
    }

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const dataUpdate = {
            firstName : fName,
            lastName : lName,
            phone : phoneNumber
        };
        updateUser(dataUpdate, user.id);
        openEditForm();
    };

    

    return (
        <>
        <tr className="text-center">
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td className="hidden md:table-cell">{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td className="items-center justify-around hidden md:flex">
              <button
                onClick={openEditForm}
                className="flex items-center px-2 py-1 text-white rounded-lg bg-slate-500">
                <i className="pr-1 ri-quill-pen-line"></i>Edit
              </button>
              <button onClick={()=>deleteUser(user.id)} className="flex items-center px-2 py-1 text-white bg-red-400 rounded-lg">
                <i className="pr-1 ri-delete-bin-4-line"></i>Delete
              </button>
            </td>
          </tr>
                {/* Edit modal */}
            <Modal
                isOpen={editForm}
                handleModalEvent={openEditForm}
                title="Edit users">
                <form onSubmit={handleUpdateUser}>
                    <TextInput
                    label="First name"
                    type="text"
                    value={fName}
                    placeholder="Enter first name"
                    onChange={(event) => setFname(event.target.value)}
                    />
                    <TextInput
                    label="Last name"
                    type="text"
                    value={lName}
                    placeholder="Enter last name"
                    onChange={(event) => setLname(event.target.value)}
                    />
                    <TextInput
                    label="Phone number"
                    type="tel"
                    value={phoneNumber}
                    placeholder="Enter phone number"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                    <div className="text-center submit-form">
                    <button className="submit-button">Submit</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default UserItem;