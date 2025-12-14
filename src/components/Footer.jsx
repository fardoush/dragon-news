import React from "react";
import { BiLogoSlack } from "react-icons/bi";


const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content items-center p-4 mx-auto flex items-center justify-center">
        <aside className="flex items-center justify-center">
          <BiLogoSlack className="text-secondary" size={24}/>

          <p className="text-primary">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        
      </footer>
    </div>
  );
};

export default Footer;
