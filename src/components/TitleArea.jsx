import React, { useState } from "react";

export default function TitleArea({ isEditing }) {
  const [name, setName] = useState("John Doe");
  const [jobDescription, setJobDescription] = useState("Front-end Developer");

  return (
    <div className="title-area text-center mb-4">
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
  );
}
