import React, { useState } from "react";
import { MdOutlineMail, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

export default function Contact({ isEditing }) {
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [phone, setPhone] = useState("123-456-789");
  const [website, setWebsite] = useState("thejohndoepage.com");

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 flex">Contact</h2>
      <ul className="space-y-4">
        <li>
          {isEditing ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block bg-transparent border-b border-gray-500"
            />
          ) : (
            <p className="flex items-center ">
              <MdOutlineMail />
              <span className="pl-2">{email}</span>
            </p>
          )}
        </li>
        <li>
          {isEditing ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block bg-transparent border-b border-gray-500"
            />
          ) : (
            <p className="flex items-center">
              <MdPhone />
              <span className="pl-1">{phone}</span>
            </p>
          )}
        </li>
        <li>
          {isEditing ? (
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="block bg-transparent border-b border-gray-500"
            />
          ) : (
            <p className="flex items-center">
              <TbWorldWww />
              <span className="pl-2">{website}</span>
            </p>
          )}
        </li>
      </ul>
    </>
  );
}
