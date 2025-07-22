import React, { useState } from "react";

export default function TitleArea({ isEditing }) {
  const [name, setName] = useState("John Doe");
  const [jobDescription, setJobDescription] = useState("Front-end Developer");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImage(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="title-area text-center mb-4 flex items-center">
      <div className="image-upload ml-6">
        {isEditing && (
          <div className="mb-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Upload Image:
              <span className="inline-block ml-2">
                <label className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
                  Select archive
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </span>
            </label>
          </div>
        )}
        {image && (
          <img
            src={image}
            alt="Uploaded"
            className="mx-auto mb-2 w-24 h-24 object-cover"
          />
        )}
      </div>
      <div className="flex-1 relative right-15 align-center items-center">
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block bg-transparent border-b border-gray-500 text-2xl font-bold"
          />
        ) : (
          <h1 className="name text-3xl font-bold my-2">{name}</h1>
        )}
        {isEditing ? (
          <input
            type="text"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="block bg-transparent border-b border-gray-500 text-xl"
          />
        ) : (
          <h3 className="job-description text-xl">{jobDescription}</h3>
        )}
      </div>
    </div>
  );
}
