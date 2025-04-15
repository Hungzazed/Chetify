import React from "react";
import "../css/Recipes.css";

const Recipes = ({ user, onLoginClick }) => {
  return (
    <div className="recipes-page">
      {!user && (
        <div className="subscription-notice">
          <div className="notice-content">
            <h2 style={{ color: "#ff4081" }}>
              This recipe is exclusively available to subscribers
            </h2>
            <h3>Join now to access effortless, hassle-free recipes</h3>

            <div className="benefits">
              <div className="benefit-item">
                <span className="check-icon">✓</span>
                <p>20,000+ recipes to suit all tastes and skill levels</p>
              </div>
              <div className="benefit-item">
                <span className="check-icon">✓</span>
                <p>Filter for diets, cook times, and more</p>
              </div>
              <div className="benefit-item">
                <span className="check-icon">✓</span>
                <p>Personal Recipe Box for favorites</p>
              </div>
              <div className="benefit-item">
                <span className="check-icon">✓</span>
                <p>Gain exclusive access to our subscriber-only mobile app</p>
              </div>
            </div>

            <div className="pricing">
              <h3>0.25USD / Week</h3>
              <p>Billed as $1 every 4 weeks for the first year</p>
            </div>

            <button className="subscribe-button" onClick={onLoginClick}>
              Subscribe Now
            </button>
            <p className="cancel-notice">Cancel or Pause any time</p>
          </div>

          <div className="subscription-image">
              
          </div>
        </div>
      )}


      <div className="all-access-features">
        <h2 style={{ color: "#ff4081" }}>
          An All Access subscription includes
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Cooking</h3>
            <p>Enjoy recipes, advice and inspiration for any occasion.</p>
          </div>
          <div className="feature-card">
            <h3>Wirecutter</h3>
            <p>Explore independent reviews for thousands of products.</p>
          </div>
          <div className="feature-card">
            <h3>Games</h3>
            <p>Unwind with Spelling Bee, Wordle, The Crossword</p>
          </div>
          <div className="feature-card">
            <h3>The Athletic</h3>
            <p>Discover in-depth, personalized sports journalism.</p>
          </div>
        </div>
      </div>

      {/* Cooking Only Subscription */}
      <div className="cooking-subscription">
        <div className="logo">Chefify</div>
        <h2 style={{ color: "#ff4081" }}>Subscribe to Chefify Cooking only</h2>
        <p>
          Enjoy thousands of delicious recipes for every taste, plus advice and
          inspiration daily.
        </p>

        <div className="subscription-options">
          <label className="option">
            <input
              type="radio"
              name="subscription"
              value="monthly"
              defaultChecked
            />
            <span className="option-text">
              <strong>$2/month</strong>
              <span>(Billed every 4 weeks)</span>
            </span>
          </label>
          <label className="option">
            <input type="radio" name="subscription" value="yearly" />
            <span className="option-text">
              <strong>$20/year</strong>
              <span>(Billed one annually)</span>
            </span>
          </label>
        </div>

        <button className="subscribe-button" onClick={onLoginClick}>
          Subscribe Now
        </button>
        <p className="cancel-notice">Cancel or Pause any time</p>
      </div>
    </div>
  );
};

export default Recipes;
