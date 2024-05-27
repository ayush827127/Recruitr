import React, { useState } from "react";

const VideoResume = () => {
  const [selectedFormat, setSelectedFormat] = useState("");

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  return (
    <div className="px-6 pt-2 w-full h-[77vh] border border-gray-200 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Select Format you want
        </h2>
        <div className="flex mb-4">
          <div
            className={`flex flex-col items-center mr-4 rounded-lg p-5 ${selectedFormat === "format1" ? "border-primary" : "border-gray-200"} border`}
          >
            <label htmlFor="format1">
              <img
                src="UserResume.png"
                alt="Resume Format 1"
                className="w-32 h-40"
              />
            </label>
            <input
              type="radio"
              id="format1"
              name="format"
              value="format1"
              checked={selectedFormat === "format1"}
              onChange={handleFormatChange}
              className="mr-2 mt-5"
            />
          </div>
          <div
            className={`flex flex-col items-center rounded-lg p-5 ${selectedFormat === "format2" ? "border-primary" : "border-gray-200"} border`}
          >
            <label htmlFor="format2">
              <img
                src="UserResume.png"
                alt="Resume Format 2"
                className="w-32 h-40"
              />
            </label>
            <input
              type="radio"
              id="format2"
              name="format"
              value="format2"
              checked={selectedFormat === "format2"}
              onChange={handleFormatChange}
              className="mr-2 mt-5"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <button className="bg-black text-white px-12 py-3 mb-4 rounded-lg">
          Download
        </button>
        <p className="text-gray-500 mb-4">
          Note: for better & best Resume fill your all details in Resume Builder.
        </p>
      </div>
    </div>
  );
};

export default VideoResume;
