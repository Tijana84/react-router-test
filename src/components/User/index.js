import React, { useState, Fragment } from "react";
import "./index.css";
import data from "./mock-data.json";
import ReadOnlyRow from "../User/ReadOnlyRow";
import EditableRow from "../User/EditableRow";

const User = () => {
  const [users, setUsers] = useState(data);
  const [editFormData, setEditFormData] = useState({
    name: "",
    birth: "",
    email: "",
    role: "",
    checked: "",
  });

  const [editUserId, setEditUserId] = useState(null);
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editUserId,
      name: editFormData.name,
      birth: editFormData.birth,
      email: editFormData.email,
      role: editFormData.role,
    };

    const newUsers = [...users];
    const index = users.findIndex((user) => user.id === editUserId);
    newUsers[index] = editedUser;
    setUsers(newUsers);
    setEditUserId(null);
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      birth: user.birth,
      email: user.email,
      role: user.role,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  const handleDeleteClick = (userId) => {
    const newUsers = [...users];
    const index = users.findIndex((user) => user.id === userId);
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth</th>
              <th>Email</th>
              <th>Role</th>
              <th>Checked</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Fragment>
                {editUserId === user.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default User;
