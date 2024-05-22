import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <marquee behavior="scroll" direction="left">
        Market closed - opens at 08:00 on the next business day
      </marquee>
    </div>
  );
};

export default Header;
