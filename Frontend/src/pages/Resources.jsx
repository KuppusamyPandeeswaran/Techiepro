import React, { useState } from "react";
import { Link } from "react-router-dom";

const Resources = ({ videos }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle category filter change
  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  // Filter videos based on search query and category
  const filteredVideos = videos.filter((video) => {
    const matchesSearchQuery =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.shortNote.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter
      ? video.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;

    return matchesSearchQuery && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 pb-8 pt-20 mt-12">
      <div className="mb-6 flex justify-center items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search videos..."
          className="p-2 border border-gray-300 rounded-lg w-full sm:w-1/2"
        />

        <select
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
          className="ml-4 p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Categories</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="CSS">CSS</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>

      {/* Video List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div
              key={video.id}
              className="border p-4 rounded-lg shadow-lg bg-white"
            >
              <h2 className="font-semibold text-lg mb-2">{video.title}</h2>
              <iframe
                width="100%"
                height="200"
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-gray-600">{video.shortNote}</p>
              <span className="block mt-2 text-sm text-gray-500">
                {video.category}
              </span>
              <Link
                to={`/superact/${video.id}`}
                className="text-blue-500 underline mt-2 block"
              >
                View Full Video
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No videos found
          </p>
        )}
      </div>

      <Link
        to="/add-video"
        className="mt-6 inline-block text-blue-500 underline"
      >
        Add New Video
      </Link>
    </div>
  );
};

export default Resources;
