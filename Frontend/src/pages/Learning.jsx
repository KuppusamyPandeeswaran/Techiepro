import React, { useState } from "react";

const SyntaxContent = {
  javascript: [
    {
      title: "Variables",
      content: "JavaScript variables are used to store data.",
    },
    {
      title: "Functions",
      content: "Functions are reusable blocks of code in JavaScript.",
    },
    {
      title: "Loops",
      content: "Loops allow you to execute a block of code multiple times.",
    },
  ],
  nodejs: [
    {
      title: "HTTP Module",
      content: "Node.js HTTP module allows to create a web server.",
    },
    {
      title: "File System",
      content:
        "Node.js File System module allows interaction with the file system.",
    },
  ],
  angular: [
    {
      title: "Directives",
      content:
        "Directives are markers on a DOM element that attach behavior to that element.",
    },
    {
      title: "Services",
      content:
        "Angular Services are objects that are used to share data and logic across components.",
    },
  ],
  html: [
    {
      title: "HTML Elements",
      content: "HTML Elements are the building blocks of an HTML document.",
    },
    {
      title: "Forms",
      content: "HTML Forms allow users to enter data for submission.",
    },
  ],
  css: [
    {
      title: "Flexbox",
      content:
        "Flexbox is a layout model that allows elements to align and distribute space dynamically.",
    },
    {
      title: "Grid",
      content:
        "CSS Grid layout allows you to create complex layouts with rows and columns.",
    },
  ],
  react: [
    {
      title: "JSX",
      content: "JSX allows writing HTML-like syntax in JavaScript.",
    },
    {
      title: "State",
      content:
        "State in React allows you to manage and track data changes within components.",
    },
  ],
};

const Categories = ["javascript", "nodejs", "angular", "html", "css", "react"];

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSyntax, setSelectedSyntax] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSyntax(null); // Reset selected syntax when changing category
  };

  const handleSyntaxClick = (syntax) => {
    setSelectedSyntax(syntax);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-100 mt-20">
      {/* Left Side: Category List */}
      <div className="sm:w-1/4 w-full bg-[#e6f7ff] p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {Categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer py-2 px-4 mb-2 rounded-md hover:bg-[#00b0ff] hover:text-white ${
                selectedCategory === category
                  ? "bg-[#00b0ff] text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Syntax List and Content */}
      <div className="sm:w-3/4 w-full bg-[#f0faff] p-4">
        {/* Syntax Selection */}
        {selectedCategory && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Syntax</h3>
            <ul>
              {SyntaxContent[selectedCategory]?.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer py-2 px-4 mb-2 rounded-md hover:bg-[#00b0ff] hover:text-white ${
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
        )}

        {/* Content Display */}
        {selectedSyntax ? (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">{selectedSyntax.title}</h2>
            <p>{selectedSyntax.content}</p>
          </div>
        ) : (
          <p className="text-gray-500 mt-6">
            Please select a syntax to see its content.
          </p>
        )}
      </div>
    </div>
  );
};

export default Learning;
