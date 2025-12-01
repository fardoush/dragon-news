import React from "react";
import "./Header.css";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <h1 className="text-6xl text-center">The Dragon News</h1>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-600 text-accent">
        {format(new Date(), "EEEE , MMMM MM , yyyy")}
      </p>
    </div>
  );
};

export default Header;
