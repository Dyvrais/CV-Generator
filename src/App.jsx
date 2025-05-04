import { useState } from "react";
import "./App.css";
import { MdPhone, MdOutlineMail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

function App() {
  const [name, setName] = useState("John Doe");
  const [jobDescription, setJobDescription] = useState("Front-end Developer");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [phone, setPhone] = useState("123-456-789");
  const [website, setWebsite] = useState("thejohndoepage.com");
  const [profile, setProfile] = useState(
    "A passionate front-end developer with experience in building responsive and user-friendly web applications."
  );
  const [experience, setExperience] = useState([
    {
      title: "Your Job Position Here",
      company: "Company Name",
      time: "Time",
      location: "Location",
      description: "Write a brief description of your job...",
    },
  ]);
  const [education, setEducation] = useState([
    {
      degree: "Your Degree Here",
      institution: "Your Institution Here",
      year: "Graduation Year",
    },
  ]);
  const [skills, setSkills] = useState(["React", "Tailwind CSS"]);
  const [languages, setLanguages] = useState([
    "English - C2",
    "Spanish - Native",
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const generatePDF = () => {
    const editButton = document.querySelector("#edit-button");
    const downloadButton = document.querySelector("#download-pdf");

    editButton.style.display = "none";
    downloadButton.style.display = "none";

    const input = document.getElementById("cv-container");
    html2canvas(input, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.8);
      const pdf = new jsPDF("p", "mm", "letter");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Generated-CV.pdf");

      editButton.style.display = "block";
      downloadButton.style.display = "block";
    });
  };

  return (
    <>
      <h1 className="text-center my-2 text-4xl">CV Generator</h1>
      <div id="cv-container" className="cv-container bg-white mx-auto p-6">
        {/* Title Area */}
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
        <hr className="border-t border-gray-500 my-4" />
        {/* Content Area */}
        <div className="content-area flex gap-6">
          {/* Left Column */}
          <div className="left-column flex-1 px-4 py-1 rounded-lg">
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
            <hr className="border-t border-gray-500 my-3" />

            {/* Skills */}
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
                        const updatedSkills = skills.filter(
                          (_, i) => i !== index
                        );
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
            {/* Add more sections as needed */}
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
          </div>

          {/* Right Column */}
          <div className="right-column flex-[2] px-4 py-1 rounded-lg">
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
            <hr className="border-t border-gray-500 my-3" />

            {/* Experience */}
            <h2 className="text-2xl font-semibold my-3 flex">Experience</h2>
            <ul className="space-y-4">
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
                    <p className="flex text-left w-sm mt-2">
                      {exp.description}
                    </p>
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
            <hr className="border-t border-gray-500 my-3" />
            {/* Languages */}
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
          </div>
        </div>

        {/* Button to toggle edit mode */}
        <button
          id="edit-button"
          onClick={toggleEditMode}
          className="mt-2 m-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        {/* Button to generate PDF */}
        <button
          id="download-pdf"
          onClick={generatePDF}
          className="mt-2 m-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Download PDF
        </button>
      </div>
    </>
  );
}

export default App;
