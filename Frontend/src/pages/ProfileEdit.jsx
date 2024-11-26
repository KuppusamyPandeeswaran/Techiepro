import React, { useState } from "react";

const ProfileEdit = () => {
  return (
    <>
      <div className="pt-16 pb-8 px-8 bg-[#f0faff]">
        <h1 className="text-3xl font-semibold ">Edit Profile</h1>
      </div>
      <div className="bg-[#f0faff] grid grid-cols-3 gap-4 px-10">
        {/* Left Column */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Profile Section */}
          <div className="bg-[#cceeff] rounded-lg shadow-lg w-full p-6">
            <div>
              <img
                src="profile.jpg"
                alt="Profile"
                className="rounded-lg w-32 h-32 mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold">Prakash</h2>
              <p className="text-sm text-gray-800">Software Engineer</p>
            </div>
            <button className="mt-4 bg-[#00b0ff] hover:bg-[#009ee6] text-white font-medium py-2 px-4 rounded-lg">
              Change Picture
            </button>
          </div>

          {/* Change Password Section */}
          <div className="bg-[#cceeff] rounded-lg shadow-lg w-full p-6">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="mt-4 bg-[#00b0ff] hover:bg-[#009ee6] text-white font-medium py-2 px-4 rounded-lg">
                Update Password
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="bg-[#cceeff] rounded-lg shadow-lg w-full p-6">
            <h2 className="text-lg font-semibold mb-4">Social Accounts</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  LinkedIn
                </label>
                <input
                  type="text"
                  name="linkedin"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  GitHub
                </label>
                <input
                  type="text"
                  name="github"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Portfolio
                </label>
                <input
                  type="text"
                  name="portfolio"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="mt-4 bg-[#00b0ff] hover:bg-[#009ee6] text-white font-medium py-2 px-4 rounded-lg">
                Save
              </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#cceeff] rounded-lg shadow-lg w-full p-6 col-span-2 self-start">
          <h1 className="text-lg font-semibold mb-4">General Information</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Add form fields here */}
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
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
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
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
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">City</label>
              <input
                type="text"
                name="city"
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                name="zip"
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
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">Role</label>
              <input
                type="text"
                name="role"
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm text-gray-800 mb-1">Bio</label>
              <textarea
                name="bio"
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
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="mt-4 bg-[#00b0ff] hover:bg-[#009ee6] text-white font-medium py-2 rounded-lg">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
