import React, { useState } from "react";

export default function Education({ isEditing }) {
  const [education, setEducation] = useState([
    {
      degree: "Your Degree Here",
      institution: "Your Institution Here",
      year: "Graduation Year",
    },
  ]);

  return (
    <>
      <h2 className="text-2xl font-semibold my-3 flex">Education</h2>
      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li key={index}>
            {isEditing ? (
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].degree = e.target.value;
                  setEducation(updatedEducation);
                }}
                className="block bg-transparent border-b border-gray-500"
                placeholder="Degree"
              />
            ) : (
              <strong className="flex text-left">{edu.degree}</strong>
            )}
            {isEditing ? (
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].institution = e.target.value;
                  setEducation(updatedEducation);
                }}
                className="block bg-transparent border-b border-gray-500"
                placeholder="Institution"
              />
            ) : (
              <p className="flex text-left">{edu.institution}</p>
            )}
            {isEditing ? (
              <input
                type="text"
                value={edu.year}
                onChange={(e) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].year = e.target.value;
                  setEducation(updatedEducation);
                }}
                className="block bg-transparent border-b border-gray-500"
                placeholder="Year"
              />
            ) : (
              <p className="flex text-left">{edu.year}</p>
            )}
            {isEditing && (
              <button
                onClick={() => {
                  const updatedEducation = education.filter(
                    (_, i) => i !== index
                  );
                  setEducation(updatedEducation);
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
            setEducation([
              ...education,
              {
                degree: "Degree",
                institution: "Institution",
                year: "Year",
              },
            ])
          }
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Education
        </button>
      )}
    </>
  );
}
