import React, { useState } from "react";

export default function Experience({ isEditing }) {
  const [experience, setExperience] = useState([
    {
      title: "Your Job Position Here",
      company: "Company Name",
      time: "Time",
      location: "Location",
      description: "Write a brief description of your job...",
    },
  ]);
  return (
    <>
      <h2 className="text-2xl font-semibold my-3 flex">Experience</h2>
      <ul className="space-y-2">
        {experience.map((exp, index) => (
          <li key={index}>
            {isEditing ? (
              <input
                type="text"
                value={exp.title}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].title = e.target.value;
                  setExperience(updatedExperience);
                }}
                className="block bg-transparent border-b border-gray-500"
              />
            ) : (
              <strong className="flex text-lg">{exp.title}</strong>
            )}
            <div className="flex justify-between">
              {isEditing ? (
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => {
                    const updatedExperience = [...experience];
                    updatedExperience[index].company = e.target.value;
                    setExperience(updatedExperience);
                  }}
                  className="block bg-transparent border-b border-gray-500"
                />
              ) : (
                <p>{exp.company}</p>
              )}
              {isEditing ? (
                <input
                  type="text"
                  value={exp.time}
                  onChange={(e) => {
                    const updatedExperience = [...experience];
                    updatedExperience[index].time = e.target.value;
                    setExperience(updatedExperience);
                  }}
                  className="block bg-transparent border-b border-gray-500"
                />
              ) : (
                <p className="text-sm text-gray-500">{exp.time}</p>
              )}
            </div>
            {isEditing ? (
              <input
                type="text"
                value={exp.location}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].location = e.target.value;
                  setExperience(updatedExperience);
                }}
                className="block bg-transparent border-b border-gray-500"
              />
            ) : (
              <p className="flex">{exp.location}</p>
            )}
            {isEditing ? (
              <textarea
                value={exp.description}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].description = e.target.value;
                  setExperience(updatedExperience);
                }}
                className="w-full bg-transparent border border-gray-500 resize-none"
                placeholder="Write a brief description of your job..."
              />
            ) : (
              <p className="flex text-justify w-md mt-1">{exp.description}</p>
            )}
            {isEditing && (
              <button
                onClick={() => {
                  const updatedExperience = experience.filter(
                    (_, i) => i !== index
                  );
                  setExperience(updatedExperience);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
      {isEditing && (
        <button
          onClick={() =>
            setExperience([
              ...experience,
              {
                title: "Job Title",
                company: "Company Name",
                time: "Time",
                location: "Location",
                description: "Job description...",
              },
            ])
          }
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Experience
        </button>
      )}
    </>
  );
}
