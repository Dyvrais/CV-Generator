import { useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";
import TitleArea from "./components/TitleArea";
import Contact from "./components/Contact";
import SkillsList from "./components/Skills";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [newLanguage, setNewLanguage] = useState("en");

  const toggleLanguage = () => {
    setNewLanguage(newLanguage === "en" ? "es" : "en");
  };

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
      const imgData = canvas.toDataURL("image/jpeg", 1);
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
        <TitleArea isEditing={isEditing} />
        <hr className="border-t border-gray-500 my-4" />

        {/* Content Area */}
        <div className="content-area flex gap-6">
          {/* Left Column */}
          <div className="left-column flex-1 px-4 py-1 rounded-lg">
            {/* Contact Area */}
            <Contact isEditing={isEditing} newLanguage={newLanguage} />
            {/* Skills */}
            <SkillsList isEditing={isEditing} newLanguage={newLanguage} />
            {/* Education */}
            <Education isEditing={isEditing} newLanguage={newLanguage} />
          </div>

          {/* Right Column */}
          <div className="right-column px-4 py-1 rounded-lg">
            <Profile isEditing={isEditing} newLanguage={newLanguage} />
            {/* Experience */}
            <Experience isEditing={isEditing} newLanguage={newLanguage} />
            {/* Languages */}
            <Languages isEditing={isEditing} newLanguage={newLanguage} />
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
      <button
        onClick={toggleLanguage}
        className={`mt-2 m-auto px-2 py-2 text-white rounded ${
          newLanguage === "en"
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {newLanguage === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
      </button>
    </>
  );
}

export default App;
