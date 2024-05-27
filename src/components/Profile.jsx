import React, { useState, useEffect } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const UserProfile = ({ onSelectSection }) => {
  const [selectedButton, setSelectedButton] = useState("Experience");

  useEffect(() => {
    onSelectSection("Experience");
  }, [onSelectSection]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    onSelectSection(buttonName); // Notify the parent component of the selection
  };

  return (
    <div className="profile-container h-[77vh] max-w-[420px] border border-gray-200 overflow-y-auto p-3">
      <div className="flex flex-col items-center justify-center ">
        <div className="max-w-md w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-primary text-white">
          <div className="px-6 py-4">
            <div className="flex items-center justify-center">
              <img
                className="w-24 h-24 rounded-full border border-white border-10"
                style={{ borderWidth: "4px" }}
                src="Profile.jpeg"
                alt="User"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="text-xl font-semibold text-white-800">John Doe</h2>
              <p className="text-white-600">Mobile: +1234567890</p>
            </div>
            <div className="flex justify-center mt-2">
              <button className="rounded-full bg-white hover:bg-blue-200 text-black px-2 mr-3 border border-orange-300">
                UI/UX
              </button>
              <button className="rounded-full bg-white hover:bg-blue-200 text-black px-2 mr-3 border border-orange-300">
                Full-Time
              </button>
              <button className="rounded-full bg-white hover:bg-blue-200 text-black px-2 mr-3 border border-orange-300">
                Perks
              </button>
              <button className="rounded-full bg-white hover:bg-blue-200 text-black px-2 border border-orange-300">
                Canteen
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-100">
                Update Personal Details &gt;
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-[2px] w-full bg-gray-400" />
        <div>
          <p className="text-black text-3xl font-semibold pt-2">
            Build Resume with Recruitr
          </p>
          <p className="pt-2 text-gray-400">
            Update these details for better chances of selection, These
            Information can be view by Hiring Teams.
          </p>
        </div>

        <div className="max-w-md w-full mt-3">
          <div className="flex flex-col items-center justify-center">
            {[
              { label: "Experience", description: "Add all your Internships and jobs, Work Details..." },
              { label: "Qualifications", description: "Highlight your Education in the eye of recruiters..." },
              { label: "Highlights, Sports", description: "Show your Highlights & Sports etc to recruiting te..." },
              { label: "Recommendations", description: "Provide Recommendations, get Recommendation..." },
              { label: "VideoResume", description: "Now share your details in video form to Employer..." },
            ].map((item) => (
              <div key={item.label} className="w-full">
                <button
                  className={`rounded-lg px-4 py-2 mb-1 text-left w-full flex ${
                    selectedButton === item.label ? "bg-black text-white" : ""
                  }`}
                  onClick={() => handleButtonClick(item.label)}
                >
                  <div>
                    <p className={`text-black text-xl ${
                      selectedButton === item.label ? "text-white" : ""
                    }`}>{item.label}</p>
                    <p className={`text-gray-500 ${
                      selectedButton === item.label ? "text-gray-200" : ""
                    }`}>{item.description}</p>
                  </div>
                  <div className="m-auto">
                    <IoMdAddCircleOutline />
                  </div>
                </button>
                <hr className="h-[2px] w-[95%] bg-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
