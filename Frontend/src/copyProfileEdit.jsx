import React, { useState } from "react";
import Navbar from "./Navbar";

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    address: "",
    email: "",
    phoneNumber: "",
    birthday: "",
    organization: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f0faff]  flex flex-col md:flex-row justify-center items-start p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Section: Image Upload */}
        <div className="bg-[#cceeff] rounded-lg shadow-lg w-full md:w-1/3 p-6 flex flex-col items-center">
          <div className="text-center">
            <img
              src="profile.jpg"
              alt="Profile"
              className="rounded-lg w-32 h-32 mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">Jese Leos</h2>
            <p className="text-sm text-gray-800">Software Engineer</p>
          </div>
          <button className="mt-4 bg-[#00b0ff] hover:bg-[#009ee6] text-white font-medium py-2 px-4 rounded-lg">
            Change Picture
          </button>
        </div>

        {/* Right Section: General Information */}
        <div className="bg-[#cceeff] rounded-lg shadow-lg w-full md:w-2/3 p-6">
          <h3 className="text-lg font-semibold mb-4">General Information</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Birthday
              </label>
              <input
                type="date"
                name="birthday"
                value={profile.birthday}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={profile.organization}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">Role</label>
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
        <div className="bg-[#cceeff] rounded-lg shadow-lg w-full md:w-2/3 p-6">
          <h3 className="text-lg font-semibold mb-4">Social Accounts</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Facebook
              </label>
              <input
                type="text"
                name="facebook"
                value={profile.facebook}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                value={profile.twitter}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                LinkedIn
              </label>
              <input
                type="text"
                name="linkedin"
                value={profile.linkedin}
                onChange={handleInputChange}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
