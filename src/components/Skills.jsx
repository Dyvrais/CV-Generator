import React, { useState } from "react";

export default function SkillsList({ isEditing }) {
  const [skills, setSkills] = useState(["React", "Tailwind CSS"]);
  return (
    <>
      <h2 className="text-2xl font-semibold my-3 flex">Skills</h2>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            {isEditing ? (
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index] = e.target.value;
                  setSkills(newSkills);
                }}
                className="block bg-transparent border-b border-gray-500"
              />
            ) : (
              <p className="block">{skill}</p>
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
    </>
  );
}
