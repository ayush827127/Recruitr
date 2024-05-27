import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience"; // Fix the import typo
import Qualifications from "./components/Qualifications"; // Add this import
import VideoResume from "./components/VideoResume"; // Add this import
import UserProfile from "./components/Profile";
import Recommendations from "./components/Recommendations";
import Highlights from "./components/Highlights";

function App() {
  const [selectedSection, setSelectedSection] = useState("Profile");

  const renderSection = () => {
    switch (selectedSection) {
      case "Experience":
        return <Experience />;
      case "Qualifications":
        return <Qualifications />;
      case "VideoResume":
        return <VideoResume />;
      case "Recommendations":
        return <Recommendations/>
      case "Highlights, Sports":
        return <Highlights/>
      default:
        return <Experience />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-7 mx-10">
        <div className="text-3xl font-semibold text-black-400">
          Profile
        </div>
        <div className="flex ">
          <div>
            <UserProfile onSelectSection={setSelectedSection} />
          </div>
          <div className=" w-[70%]">{renderSection()}</div>
        </div>
      </div>
    </>
  );
}

export default App;
