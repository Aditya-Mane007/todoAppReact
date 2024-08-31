import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="logo">TODO</div>
      <p>&copy;{year} TODO,inc</p>
    </div>
  );
}

export default Footer;
