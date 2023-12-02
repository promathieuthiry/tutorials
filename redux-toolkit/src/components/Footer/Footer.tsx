import React from "react";
import "./FooterStyle.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      Made with{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>{" "}
      by{" "}
      <a href="https://github.com/promathieuthiry" target="_blank">
        promathieuthiry
      </a>
    </footer>
  );
};

export default Footer;
