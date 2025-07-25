import React, { useState } from "react";

export default function SkillsList({ isEditing, newLanguage }) {
  const [skills, setSkills] = useState(["React", "Tailwind CSS"]);

  if (skills.length === 0) return null;

  return (
    <>
      <h2 className="text-2xl font-semibold my-3 flex">
        {newLanguage === "en" ? "Skills" : "Habilidades"}
      </h2>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="">
            {isEditing ? (
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index] = e.target.value;
                  setSkills(newSkills);
                }}
                className="flex bg-transparent border-b border-gray-500"
              />
            ) : (
              <p className="flex">• {skill}</p>
            )}
            {isEditing && (
              <button
                onClick={() => {
                  const updatedSkills = skills.filter((_, i) => i !== index);
                  setSkills(updatedSkills);
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
          onClick={() => setSkills([...skills, "New Skill"])}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Skill
        </button>
      )}
      <hr className="border-t border-gray-500 my-3" />
    </>
  );
}
