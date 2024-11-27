import React, { useState } from "react";

const AddVideo = ({ addVideo }) => {
  const [newVideo, setNewVideo] = useState({
    title: "",
    url: "",
    shortNote: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newVideo.title &&
      newVideo.url &&
      newVideo.shortNote &&
      newVideo.category
    ) {
      addVideo(newVideo);
      setNewVideo({ title: "", url: "", shortNote: "", category: "" }); // Clear the form
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Add New Video
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-[#e6f7ff] p-6 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Video Title
          </label>
          <input
            type="text"
            name="title"
            value={newVideo.title}
            onChange={handleInputChange}
            placeholder="Enter video title"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700"
          >
            YouTube Embed URL
          </label>
          <input
            type="text"
            name="url"
            value={newVideo.url}
            onChange={handleInputChange}
            placeholder="Enter YouTube embed URL"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="shortNote"
            className="block text-sm font-medium text-gray-700"
          >
            Short Note
          </label>
          <textarea
            name="shortNote"
            value={newVideo.shortNote}
            onChange={handleInputChange}
            placeholder="Write a short note about the video"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            value={newVideo.category}
            onChange={handleInputChange}
            placeholder="Enter category"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Video
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
