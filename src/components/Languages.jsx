import React, { useState } from "react";

export default function Experience({ isEditing }) {
  const [languages, setLanguages] = useState([
    "English - C2",
    "Spanish - Native",
  ]);

  return (
    <>
      <h2 className="text-2xl font-semibold my-3 flex">Languages</h2>
      <ul className="space-y-2">
        {languages.map((language, index) => (
          <li key={index} className="flex items-center">
            {isEditing ? (
              <input
                type="text"
                value={language}
                onChange={(e) => {
                  const newLanguages = [...languages];
                  newLanguages[index] = e.target.value;
                  setLanguages(newLanguages);
                }}
                className="block bg-transparent border-b border-gray-500"
              />
            ) : (
              <p className="block">{language}</p>
            )}
            {isEditing && (
              <button
                onClick={() => {
                  const updatedLanguage = languages.filter(
                    (_, i) => i !== index
                  );
                  setLanguages(updatedLanguage);
                }}
                className="bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
      {isEditing && (
        <button
          onClick={() => setLanguages([...languages, "Language - B1"])}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add language
        </button>
      )}
    </>
  );
}
