import React, { useState } from "react";
import data from "./data.json";

const Learning = () => {
  const categories = Object.keys(data);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSyntax, setSelectedSyntax] = useState(data[categories[0]][0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSyntax(data[category][0]); // Default to the first syntax
  };

  const handleSyntaxClick = (syntax) => {
    setSelectedSyntax(syntax);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mt-20 max-sm:mt-0">
      {/* Categories Section */}
      <div className="bg-[#f0faff] text-white flex flex-wrap justify-center items-center gap-4 p-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`py-2 px-4 rounded-md text-sm sm:text-base font-semibold transition ${
              selectedCategory === category
                ? "bg-[#00b0ff] hover:bg-[#009ee6]"
                : "bg-gray-500 hover:bg-[#00b0ff]"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Syntax Panel */}
        <div className="bg-[#e6f7ff] p-4 w-full lg:w-1/4 border-r border-gray-300">
          <h2 className="text-lg font-bold mb-4">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
            Syntax
          </h2>
          <ul className="space-y-2">
            {data[selectedCategory].map((syntax, index) => (
              <li
                key={index}
                onClick={() => handleSyntaxClick(syntax)}
                className={`cursor-pointer py-2 px-4 rounded-md border transition ${
                  selectedSyntax?.title === syntax.title
                    ? "bg-[#00b0ff] text-white"
                    : "bg-white hover:bg-gray-200"
                }`}
              >
                {syntax.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Panel */}
        <div className="p-4 flex-1">
          <h2 className="text-xl font-bold mb-4">{selectedSyntax?.title}</h2>
          <p className="text-gray-700">{selectedSyntax?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
