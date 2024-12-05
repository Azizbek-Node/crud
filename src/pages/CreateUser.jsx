import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const CreateUser = () => {
  const { addUser, updateUser, editingUser, cancelEditing } =
    useContext(UserContext);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    profession: "",
    gender: "",
  });

  // Populate form when editing a user
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        firstname: "",
        lastname: "",
        age: "",
        profession: "",
        gender: "",
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, age, profession, gender } = formData;

    if (firstname && lastname && age && profession && gender) {
      if (editingUser) {
        // Update user
        updateUser(editingUser.id, formData);
        alert("User updated successfully!");
      } else {
        // Create new user
        addUser({ id: Date.now(), ...formData });
        alert("User created successfully!");
      }
      setFormData({
        firstname: "",
        lastname: "",
        age: "",
        profession: "",
        gender: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {editingUser ? "Edit User" : "Create User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {editingUser ? "Update User" : "Create User"}
            </button>
            {editingUser && (
              <button
                type="button"
                onClick={cancelEditing}
                className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
