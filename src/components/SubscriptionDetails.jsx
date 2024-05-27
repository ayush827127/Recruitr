import React from "react";

const SubscriptionDetails = () => {
  return (
    <div className="">
      <div className="drawer drawer-end">
        <input id="drawer-subscription-details" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="drawer-subscription-details" className="drawer-button ">
            Subscription Details
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="drawer-subscription-details"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
           <div className="menu p-4 w-96 min-h-full bg-white text-base-content relative ">
            {/* Close button */}
            <label
              htmlFor="drawer-subscription-details"
              className="absolute top-3 right-6  bg-white  text-3xl cursor-pointer"
              aria-label="Close"
            >
              ✕
            </label>
            {/* Sidebar content here */}
            <h2 className="text-2xl  mb-4 text-primary">Subscription Details</h2>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
