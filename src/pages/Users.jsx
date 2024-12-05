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
    startEditingUser(user);
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-500 to-indigo-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          Manage Users
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-gray-100 rounded-lg shadow-lg p-6 transition hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {user.firstname} {user.lastname}
              </h3>
              <p className="text-gray-600">
                <strong>Age:</strong> {user.age}
              </p>
              <p className="text-gray-600">
                <strong>Profession:</strong> {user.profession}
              </p>
              <p className="text-gray-600">
                <strong>Gender:</strong> {user.gender}
              </p>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {modal.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-sm">
              <h4 className="text-xl font-semibold text-gray-800 text-center mb-4">
                Confirm Deletion
              </h4>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to delete this user?
              </p>
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setModal({ show: false, userId: null })}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 w-full"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
                >
                  Confirm
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
