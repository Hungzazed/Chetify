import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="d-flex justify-content-between container pt-5">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="email-signup">
            <input type="email" style={{backgroundColor: "white", color: "black"}} placeholder="Enter your email" />
            <button>Send</button>
          </div>

          <div className="pt-5 d-flex gap-5 align-items-end">
            <div className="footer-logo">
              <h2 className="fw-bolder">Chefify</h2>
            </div>
            <div className="footer-links">
              <span>2023 Chefify Company</span>
              <a href="#">Terms of Service|Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Learn More</h3>
          <ul>
            <li>
              <a href="#">Our Cookie</a>
            </li>
            <li>
              <a href="#">See Our Features</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="#">Gift Subscription</a>
            </li>
            <li>
              <a href="#">Send Us Feedback</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Recipes</h3>
          <ul>
            <li>
              <a href="#">What to Cook This Week</a>
            </li>
            <li>
              <a href="#">Pasta</a>
            </li>
            <li>
              <a href="#">Dinner</a>
            </li>
            <li>
              <a href="#">Healthy</a>
            </li>
            <li>
              <a href="#">Vegetarian</a>
            </li>
            <li>
              <a href="#">Vegan</a>
            </li>
            <li>
              <a href="#">Christmas</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
