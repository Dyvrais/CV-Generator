import React, { useState } from "react";
import { MdOutlineMail, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

export default function Contact({ isEditing, newLanguage }) {
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [phone, setPhone] = useState("123-456-789");
  const [website, setWebsite] = useState("thejohndoepage.com");

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 flex">
        {newLanguage === "en" ? "Contact" : "Contacto"}
      </h2>
      <ul className="space-y-4 max-w-[250px]">
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
              <MdOutlineMail className="min-w-[16px]" />
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
            <div className="flex items-center">
              <MdPhone className="min-w-[16px]" />
              <p className="pl-1">{phone}</p>
            </div>
          )}
        </li>
        {/* MIGUEL MIGUEL MIGUEL >>> ARREGLAR */}
        {/* <li>
          {isEditing ? (
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="block bg-transparent border-b border-gray-500"
            />
          ) : (
            <div id="Www" className="flex items-center">
              <TbWorldWww className="min-w-[16px]" />
              <p className="text-left text-[#0000EE] max-w-[250px] pl-2 underline">
                {website}
              </p>
            </div>
          )}
        </li> */}
      </ul>
      <hr className="border-t border-gray-500 my-3" />
    </>
  );
}
