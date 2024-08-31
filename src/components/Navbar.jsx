import React from "react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">TODO</div>
      <a
        href="https://github.com/Aditya-Mane007/todoApp"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn githubBtn">
          <FaGithub className="icon" /> Github
        </button>
      </a>
    </div>
  );
}

export default Navbar;
