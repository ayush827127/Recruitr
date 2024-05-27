import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const JobPreference = () => {
  const jobTitles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "Sales Manager",
  ];

  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleCheckboxChange = (jobTitle) => {
    setSelectedJobs((prevSelectedJobs) =>
      prevSelectedJobs.includes(jobTitle)
        ? prevSelectedJobs.filter((title) => title !== jobTitle)
        : [...prevSelectedJobs, jobTitle]
    );
  };

  return (
    <div className="">
      <div className="drawer drawer-end">
        <input
          id="drawer-job-preference"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="drawer-job-preference" className="drawer-button">
            Update Job Preference
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="drawer-job-preference"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-96 min-h-full bg-white text-base-content relative ">
            {/* Close button */}
            <label
              htmlFor="drawer-job-preference"
              className="absolute top-3 right-6 bg-white text-3xl cursor-pointer"
              aria-label="Close"
            >
              ✕
            </label>
            {/* Sidebar content here */}
            <h2 className="text-2xl mb-4 text-primary">Your Job Preference</h2>
            <div className="relative w-full max-w-md mr-2">
              <input
                type="text"
                placeholder="Search Job titles..."
                className="input input-bordered w-full pr-5"
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
            <h1 className="text-xl font-semibold my-4">Popular Job Titles</h1>
            <div>
              {jobTitles.map((title) => (
                <div key={title} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={title}
                    name={title}
                    className="mr-5 ml-4"
                    checked={selectedJobs.includes(title)}
                    onChange={() => handleCheckboxChange(title)}
                  />
                  <label
                    htmlFor={title}
                    className={`cursor-pointer text-xl ${
                      selectedJobs.includes(title) ? "font-bold" : ""
                    }`}
                  >
                    {title}
                  </label>
                </div>
              ))}
            </div>

            <h1 className="text-xl font-semibold my-4">Your Preferences</h1>
            <div>
              <div className="btn bg-blue-100 border border-primary rounded-full py-4 my-2 mr-1">
                UI/UX Designer
                <div>X</div>
              </div>
              <div className="btn bg-blue-100 border border-primary rounded-full py-4 my-2 mr-1">
                Senior Java Developer
                <div>X</div>
              </div>

              <div className="btn bg-blue-100 border border-primary rounded-full py-4 my-2 mr-1">
                IOS Developer
                <div>X</div>
              </div>

              <div className="btn bg-blue-100 border border-primary rounded-full py-4 my-2 mr-1">
                Graphic Designer
                <div>X</div>
              </div>

              <div className="btn bg-blue-100 border border-primary rounded-full py-4 my-2 mr-1">
                Lawyer
                <div>X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreference;
