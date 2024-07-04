import React, { useState } from "react";

const JournalImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles]);
      const fileUrls = fileArray.map((file) => URL.createObjectURL(file));
      setImageUrls((prevUrls) => [...prevUrls, ...fileUrls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedFiles((prevUrls) => prevUrls.filter((_, i) => i !== index));
    setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <div className="mt-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2"
          multiple
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {imageUrls.map((url, index) => (
          <div key={index} className="relative w-1/4">
            <img
              src={url}
              alt={`Selected ${index}`}
              className="w-full h-auto"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white rounded-full p-1"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalImageUpload;
