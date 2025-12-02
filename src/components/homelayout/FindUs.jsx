import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <a href="https://www.facebook.com/" target="_blank" className="btn bg-base-100 justify-start join-item text-accent">
            <FaFacebookF className="text-blue-900 " /> Facebook
          </a>
          <a href="https://twitter.com/" target="_blank" className="btn bg-base-100 justify-start join-item text-accent">
            <FaTwitter className="text-blue-300 " /> Twitter
          </a>
          <a href="https://instagram.com/" target="_blank" className="btn bg-base-100 justify-start join-item text-accent">
            <FaInstagram className="text-secondary" /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
