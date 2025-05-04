import React, { useState } from "react";

export default function Profile({ isEditing }) {
  const [profile, setProfile] = useState(
    "A passionate front-end developer with experience in building responsive and user-friendly web applications."
  );
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 flex">Profile</h2>
      {isEditing ? (
        <textarea
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          className="w-full h-24 bg-transparent border border-gray-500 resize-none"
          placeholder="Write a brief profile about yourself..."
        />
      ) : (
        <p className="block w-sm h-fit flex text-justify">{profile}</p>
      )}
    </>
  );
}
