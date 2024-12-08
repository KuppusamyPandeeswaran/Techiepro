import React, { useState, useEffect } from "react";
import data from "./data.json";

const Categories = Object.keys(data);

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
  const [selectedSyntax, setSelectedSyntax] = useState(data[Categories[0]][0]);

  useEffect(() => {
    // Update syntax when the category changes
    if (selectedCategory) {
      setSelectedSyntax(data[selectedCategory][0]);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSyntaxClick = (syntax) => {
    setSelectedSyntax(syntax);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 mt-20">
      {/* Top: Categories */}
      <div className="flex bg-[#f0faff] p-4 shadow">
        {Categories.map((category) => (
          <button
            key={category}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-[#00b0ff] text-white"
                : "bg-gray-300"
            } hover:bg-[#00b0ff] hover:text-white`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-1">
        {/* Left Panel: Syntax List */}
        <div className="w-1/4 bg-[#e6f7ff] p-4">
          <h3 className="text-lg font-semibold mb-4">Syntax</h3>
          <ul>
            {data[selectedCategory]?.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 px-4 mb-2 rounded hover:bg-[#00b0ff] hover:text-white ${
                  selectedSyntax?.title === item.title
                    ? "bg-[#00b0ff] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleSyntaxClick(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Panel: Content */}
        <div className="flex-1 bg-[#f0faff] p-4">
          {selectedSyntax ? (
            <>
              <h2 className="text-2xl font-bold mb-4">
                {selectedSyntax.title}
              </h2>
              <p>{selectedSyntax.content}</p>
            </>
          ) : (
            <p className="text-gray-500">Select a syntax to see its content.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learning;
