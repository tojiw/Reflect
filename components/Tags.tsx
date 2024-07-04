import React, { useState } from "react";

const Tags = () => {
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tag !== "") {
      setTags([...tags, tag]);
      setTag("");
    } else {
      alert("Please enter a tag");
    }
  };

  const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

  const getColorClass = (index: number) => {
    return `tag-color tag-color-${colors[index % colors.length]}`;
  };

  return (
    <div className="border-2 border-red-500 p-3">
      <p className="mb-1">Enter Tags</p>
      <p className="mb-3">Press enter to add new keyword.</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-full px-3 py-1"
          >
            <span
              className={getColorClass(index)}
              style={{
                backgroundColor: "var(--tag-color)",
                width: "7px",
                height: "7px",
              }}
            ></span>
            <span>{tag}</span>
            <button
              onClick={() => setTags(tags.filter((_, i) => i !== index))}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="border rounded px-2 py-1 w-full"
          placeholder="Add a tag..."
        />
      </form>
    </div>
  );
};

export default Tags;
