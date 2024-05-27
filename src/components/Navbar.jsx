import React, { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TfiBag } from "react-icons/tfi";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { LuFileDown } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { GiMayanPyramid } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import JobPreference from "./JobPreference";
import UpdateDocument from "./UpdateDocument";
import HiringProcessDetails from "./HiringProcessDetails";
import SubscriptionDetails from "./SubscriptionDetails";
import Refertofriends from "./Refertofriends";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="navbar bg-base-100 px-12 pt-2 fixed top-0 w-full z-50 transition-shadow 
           shadow-md"
      >
        <div className="flex items-center gap-4 w-full">
          <a className="text-3xl font-bold text-primary cursor-pointer">
            Recruitr
          </a>
          <div className="form-control flex-grow">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-90"
            />
          </div>
          <div className="flex items-center gap-4">
            <div
              id="dashboard"
              className="flex items-center gap-2 mx-4 cursor-pointer"
            >
              <RxDashboard />
              <p>Dashboard</p>
            </div>
            <div
              id="FindJobs"
              className="flex items-center gap-2 mx-4 cursor-pointer"
            >
              <TfiBag />
              <p>Find Jobs</p>
            </div>
            <div
              id="AppliedJobs"
              className="flex items-center gap-2 mx-4 cursor-pointer"
            >
              <FaRegCheckCircle />
              <p>Applied Jobs</p>
            </div>
            <RxDividerVertical />
            <FaRegCommentDots />
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item bg-red-400"></span>
              </div>
            </button>
            <RxDividerVertical />
          </div>
          <div className="flex  items-center bg-blue-100  px-3 rounded-lg">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="text-primary text-xl">
                    <img
                      src="/Profile.jpeg"
                      alt="Dp"
                      className="w-8 h-8 rounded-full"
                    />
                    Robin
                  </summary>
                  <ul
                    style={{ marginInlineStart: "-43px", marginTop: "2rem" }}
                    className="p-1 bg-base-100 w-[240px] border rounded-lg border-gray-200 z-10"
                  >
                    <li>
                      <a className="z-[-1]">
                        <FaRegUser />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a >
                        <GoPencil />
                        <JobPreference />
                      </a>
                    </li>
                    <li>
                      <a>
                        <LuFileDown />
                        <UpdateDocument />
                      </a>
                    </li>
                    <li>
                      <a>
                        <GiMayanPyramid />
                        <HiringProcessDetails />
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="text-yellow-400 z-[-1]">
                          <FaStar />
                        </div>
                        <SubscriptionDetails />
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="z-[-1]">
                        <FaUserPlus />
                        </div>
                        
                        <Refertofriends />
                      </a>
                    </li>
                    <hr className="h-[2px] bg-gray-400 w-[90%] m-auto"></hr>
                    <li>
                      <a className="text-red-600 z-[-1]">
                        <MdLogout />
                        Logout
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Add some padding-top to the body to prevent content from being hidden under the fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
