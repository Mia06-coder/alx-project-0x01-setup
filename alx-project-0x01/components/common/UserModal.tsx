import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSave }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="address.street"
            value={user.address.street}
            onChange={handleChange}
            placeholder="Street"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="address.suite"
            value={user.address.suite}
            onChange={handleChange}
            placeholder="Suite"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="address.city"
            value={user.address.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="address.zipcode"
            value={user.address.zipcode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="address.geo.lat"
            value={user.address.geo.lat}
            onChange={handleChange}
            placeholder="Latitude"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="address.geo.lng"
            value={user.address.geo.lng}
            onChange={handleChange}
            placeholder="Longitude"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="website"
            value={user.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="company.name"
            value={user.company.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="company.catchPhrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            placeholder="Catch Phrase"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="company.bs"
            value={user.company.bs}
            onChange={handleChange}
            placeholder="Business Strategy"
            className="w-full px-4 py-2 border rounded"
          />
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
