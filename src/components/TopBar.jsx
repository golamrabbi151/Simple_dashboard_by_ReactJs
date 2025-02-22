import React from "react";
// import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar max-w-full  ">
      <div className="flex justify-between items-center  bg-gray-800 text-white px-4 py-[5px]">
        <div className="logo  ">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center space-x-4 ">
          <div className="notification-icon">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </div>
          <span className="profile-name">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
