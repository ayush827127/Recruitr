import React, { useState } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";

const FileInput = ({ label }) => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
  };

  return (
    <div className="mb-2 flex flex-col gap-2">
      <label className="flex items-center gap-2 text-black text-base font-semibold mb-0">
        {label}
      </label>
      <div className="relative">
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 mt-0"
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg">
          <span className="text-gray-400">
            {fileName ? fileName : "Choose a file..."}
          </span>
          {fileName ? (
            <FaTrash
              className="text-red-400 cursor-pointer"
              onClick={handleRemoveFile}
            />
          ) : (
            <FaUpload className="text-gray-400" />
          )}
        </div>
      </div>
      <p className="text-gray-400 mx-2 my-0 text-xs">
        Note: PDF file only | 2-5 MB file size maximum
      </p>
    </div>
  );
};

const UpdateDocument = () => {
  return (
    <div className="">
      <div className="drawer drawer-end">
        <input
          id="drawer-update-document"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="drawer-update-document" className="drawer-button">
            Update Document
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="drawer-update-document"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-2 px-4 w-96 min-h-full bg-white text-base-content relative">
            {/* Close button */}
            <label
              htmlFor="drawer-update-document"
              className="absolute top-3 right-6 bg-white text-3xl cursor-pointer"
              aria-label="Close"
            >
              ✕
            </label>
            {/* Sidebar content here */}
            <h2 className="text-2xl mb-2 text-primary">Update Documents</h2>
            <h3 className="text-xl mb-1">Document Details</h3>
            <p className="text-gray-500 mb-2 ">
              Please upload your documents using the fields below. You can add
              up to five files.
            </p>
            {/* <div className="h-120 overflow-y-auto"> */}
              <FileInput label="Upload Pancard" />
              <FileInput label="Upload Aadhar Card" />
              <FileInput label="Upload Passport" />
              <FileInput label="Upload Driving License" />
              <FileInput label="Upload Voter ID" />
            {/* </div> */}
            <div>
          Note: Contact Customer Support to Upload other documents.
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default UpdateDocument;
