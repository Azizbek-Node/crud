import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { users, deleteUser, startEditingUser } = useContext(UserContext);
  const [modal, setModal] = useState({ show: false, userId: null });
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setModal({ show: true, userId: id });
  };

  const confirmDelete = () => {
    deleteUser(modal.userId);
    setModal({ show: false, userId: null });
    alert("User deleted successfully!");
  };

  const handleEdit = (user) => {
    startEditingUser(user); // Set the user to edit
    navigate("/create"); // Navigate to Create User page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-0.4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Users
        </h2>
        <ul className="space-y-6">
          {users.map((user) => (
            <li
              key={user.id}
              className="border rounded-lg p-6 flex justify-between items-center shadow-md"
            >
              <div>
                <p className="text-lg font-semibold">
                  Name: {user.firstname} {user.lastname}
                </p>
                <p className="text-gray-600">Age: {user.age}</p>
                <p className="text-gray-600">Profession: {user.profession}</p>
                <p className="text-gray-600">Gender: {user.gender}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Modal for Deleting User */}
        {modal.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <p className="text-xl font-bold text-gray-800 mb-4 text-center">
                Are you sure?
              </p>
              <p className="text-gray-600 text-center mb-6">
                Do you agree to delete this user?
              </p>
              <div className="flex justify-between space-x-4">
                <button
                  onClick={() => setModal({ show: false, userId: null })}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition w-full"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
