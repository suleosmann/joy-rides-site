import React from "react";
import "./css/Footer.css"; // Make sure the path to your CSS file is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src="/images/joyrides-logo.png" alt="Kai and Karo Logo" />{" "}
          {/* Replace with your logo path */}
          <p>© 2023 Joy and Rides All rights reserved</p>
        </div>
        <div className="footer-socials">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/location">Location</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>
            <a href="/faq">Frequently asked Questions</a>
          </li>
          <li>
            <a href="/terms">Sell On Behalf Terms of Service</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Stay up to date</h4>
        <div className="footer-subscribe">
          <input type="email" placeholder="Your email address" />
          <button type="submit">📧</button>{" "}
          {/* Replace with an actual icon or image */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
