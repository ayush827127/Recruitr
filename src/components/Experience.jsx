import React from "react";

const Experience = () => {
  return (
    <div className="px-6 pt-2 w-full h-[77vh]  border border-gray-200 ">
      <h2 className="text-2xl font-bold mb-4 text-primary">Experience</h2>

      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center">
          <div className="flex flex-col w-1/2 mx-3">
            <label className="w-full font-medium">Job Title:</label>
            <input
              type="text"
              placeholder="Example: Product Manager"
              className="flex-grow  p-3 border border-gray-200 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-1/2 mx-3">
            <label className="w-full font-medium ml-4">Company Name:</label>
            <input
              type="text"
              placeholder="Example: Google"
              className="flex-grow  p-3 border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col w-1/2 m-3">
            <label className="w-full font-medium">Employment Type:</label>
            <select className="flex-grow border p-2">
              <option value="">Select Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2 mx-3">
            <label className="w-full font-medium ml-4">Working Status:</label>
            <select className="flex-grow border p-2">
              <option value="">Select Status</option>
              <option value="working">Working</option>
              <option value="not-working">Not Working</option>
            </select>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col w-1/2 mx-3">
            <label className="w-full font-medium">Work Location:</label>
            <input type="text" placeholder="Example: London-Work from home" className="flex-grow border p-3" />
          </div>
          <div className="flex flex-col w-1/2 mx-3">
            <label className="w-1/4 font-medium ml-4">Add CTC:</label>
            <input type="text" placeholder="#only figure entry in salary" className="flex-grow border p-3" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col w-1/2 mx-3">
            <label className="w-full font-medium">Starting Date:</label>
            <input type="date" className="flex-grow border p-2" />
          </div>
          <div className="flex flex-col w-1/2 mx-3">
            <label className="w-1/4 font-medium ml-4">Ending Date:</label>
            <input type="date" className="flex-grow border p-2" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col w-full mx-3">
            <label className="w-full font-medium">About</label>
            <input type="text" placeholder="Description about you .." className="flex-grow border p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
