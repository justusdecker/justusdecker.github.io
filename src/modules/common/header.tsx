import React from "react";
import './header.css';
import { GitHubAvatarV4 } from "./constants";
const Header: React.FC = () => {
  return (
    <header id="head">
      <img src={GitHubAvatarV4} alt="" />
      <div id="head-text">
        <h1>Justus Decker</h1>
        <h2>Handwerker & Techniker</h2>
      </div>
    </header>
  );
};

export default Header;