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
        updateUser(editingUser.id, formData);
        alert("User updated successfully!");
      } else {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 py-12">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-2xl p-10 md:p-16">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          {editingUser ? "Edit User" : "Create User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md"
            />
          </div>
          <div className="relative">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md"
            />
          </div>
          <div className="relative">
            <p className="text-gray-700 font-medium mb-4 text-center">Gender</p>
            <div className="flex items-center justify-center space-x-8">
              <label className="flex items-center text-lg text-gray-800">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="form-radio text-blue-600 h-6 w-6"
                />
                <span className="ml-3">Male</span>
              </label>
              <label className="flex items-center text-lg text-gray-800">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="form-radio text-pink-600 h-6 w-6"
                />
                <span className="ml-3">Female</span>
              </label>
            </div>
          </div>
          <div className="flex space-x-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
            >
              {editingUser ? "Update User" : "Create User"}
            </button>
            {editingUser && (
              <button
                type="button"
                onClick={cancelEditing}
                className="w-full bg-gray-400 text-white font-semibold py-4 rounded-xl hover:bg-gray-500 transition duration-300 shadow-md"
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
