import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaReddit, FaInstagram, FaWhatsapp, FaStackOverflow } from "react-icons/fa"; // Import social media icons from React Icons

const Refertofriends = () => {
  const [message, setMessage] = useState(
    "Hey! It's been a game-changer for me in finding job opportunities and connecting with employers. Join now to level up our careers together! Get it from: https://recruitr.com/invite linkexample - Sender name"
  );

  // Function to handle copying the message
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        alert("Message copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="">
      <div className="drawer drawer-end">
        <input
          id="drawer-refer-friends"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="drawer-refer-friends" className="drawer-button ">
            Refer to friends
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="drawer-refer-friends"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-96 min-h-full bg-white text-base-content relative">
            {/* Close button */}
            <label
              htmlFor="drawer-refer-friends"
              className="absolute top-3 right-6 bg-white text-3xl cursor-pointer"
              aria-label="Close"
            >
              ✕
            </label>
            {/* Sidebar content here */}
            <h2 className="text-2xl mb-4 text-primary font-semibold">
              Refer to your Friends
            </h2>
            {/* Message input field */}
            <div className="mb-4">
              <textarea
                placeholder="Enter your message..."
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5} // Set the number of visible rows
              />
            </div>
            {/* Copy button */}
            <div
              onClick={copyToClipboard}
              className=" text-primary px-4 py-2 rounded cursor-pointer mb-4 flex items-center text-lg mx-auto"
            >
              <div className="px-4">
                <IoCopyOutline />
              </div>
              <div>Copy Message</div>
            </div>
            {/* Social media logos/icons */}
            <div className="flex space-x-4 item-center mt-9 mx-3">
              {/* Include social media icons here */}
              <div>
                <FaReddit size={45} color="#FF4500" />
                Reddit
              </div>
              
              <div>
                <FaInstagram size={45} color="#bc2a8d" />
                Instagram
              </div>
              <div>
                <FaFacebook size={45} color="#1877f2" />
                Facebook
              </div>
            
              <div>
                <FaWhatsapp size={45} color="#25D366" />
                Whatsapp
              </div>
              <div>
                <FaStackOverflow size={45} color="#f58025" />
                Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refertofriends;
