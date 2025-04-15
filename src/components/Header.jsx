import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";
import logo from "../assets/Group 9.png"; // Update path as needed
import avatar from "../assets/avatar.png";

const Header = ({ user, onLoginClick, onLogout }) => {
  const navigate = useNavigate();

  const handleRecipeBoxClick = () => {
    navigate("/about");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (searchValue) {
      navigate(`/filter/${searchValue}`);
    }
  }
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="Chefify Logo" />
            </div>
          </Link>
        </div>

        <div>
          <form action="" onSubmit={(e) => handleSearch(e)}>
            <input 
              type="text" 
              name="search" 
              className=""
              style={{ width: "300px", height: "40px", borderRadius: "5px", padding: "10px", border: "1px solid #ccc", outline: "none" }}
              placeholder='What would you like to cook?' 
            />
          </form>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/whattocook">What to cook</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/">Ingredients</Link>
            </li>
            <li>
              <Link to="/">Occasions</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>

        <div className="auth-area">
          {user ? (
            <>
              <button className="recipe-box-btn text-center" 
                style={{borderRadius: "10px", width: "150px", border:"none", backgroundColor: "#fdf0f5", color: "#ff4081", padding: "8px 10px"}}
              onClick={handleRecipeBoxClick}>
                Your Recipe Box
              </button>
              <div className="user-avatar">
                <img src={avatar} alt="User" onClick={onLogout} />
              </div>
            </>
          ) : (
            <>
              <button className="p-2 me-2" onClick={onLoginClick}
                style={{borderRadius: "10px", width: "80px", border:"none", backgroundColor: "#fdf0f5", color: "#f84986"}}
              >
                Login
              </button>
              <button className="p-2 me-2" onClick={onLoginClick}
                style={{borderRadius: "10px", width: "120px", border:"none", backgroundColor: "#f84986", color: "#fdf0f5"}}
              >
                Subscribe
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
