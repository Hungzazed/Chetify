import React, { useState, useEffect } from "react";
import "../css/AboutUs.css";
import { Share, PersonCircle } from "react-bootstrap-icons";
import profileImage from "../assets/avatar.png";
import {Row, Col} from "react-bootstrap"
import { BookmarkFill } from "react-bootstrap-icons";
import ic73 from '../assets/Lab_02_b/Icon Button 73.png'
import { useCook } from '../context/CookContext'

const AboutUs = ({ user, onLoginClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { recipes } = useCook();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevClick();
      } else if (event.key === "ArrowRight") {
        handleNextClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  const recipesPerPage = 4;
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePrevClick = () => {
    const newPage = currentPage === 1 ? totalPages : currentPage - 1;
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  const handleNextClick = () => {
    const newPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevClick();
      } else if (event.key === "ArrowRight") {
        handleNextClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pageButtons = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`page-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => handlePageClick(i)}>
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`page-btn ${currentPage === i ? "active" : ""}`}
              onClick={() => handlePageClick(i)}>
              {i}
            </button>
          );
        }
        pageButtons.push(
          <span key="ellipsis1" className="ellipsis">
            ...
          </span>
        );
        pageButtons.push(
          <button
            key={totalPages}
            className={`page-btn ${currentPage === totalPages ? "active" : ""}`}
            onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </button>
        );
      } else if (currentPage >= totalPages - 2) {
        pageButtons.push(
          <button
            key={1}
            className={`page-btn ${currentPage === 1 ? "active" : ""}`}
            onClick={() => handlePageClick(1)}>
            1
          </button>
        );
        pageButtons.push(
          <span key="ellipsis2" className="ellipsis">
            ...
          </span>
        );
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`page-btn ${currentPage === i ? "active" : ""}`}
              onClick={() => handlePageClick(i)}>
              {i}
            </button>
          );
        }
      } else {
        pageButtons.push(
          <button
            key={1}
            className={`page-btn ${currentPage === 1 ? "active" : ""}`}
            onClick={() => handlePageClick(1)}>
            1
          </button>
        );
        pageButtons.push(
          <span key="ellipsis1" className="ellipsis">
            ...
          </span>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`page-btn ${currentPage === i ? "active" : ""}`}
              onClick={() => handlePageClick(i)}>
              {i}
            </button>
          );
        }
        pageButtons.push(
          <span key="ellipsis2" className="ellipsis">
            ...
          </span>
        );
        pageButtons.push(
          <button
            key={totalPages}
            className={`page-btn ${currentPage === totalPages ? "active" : ""}`}
            onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </button>
        );
      }
    }
    return pageButtons;
  };

  if (!user) {
    return (
      <div className="not-logged-in">
        <div className="not-logged-in-content">
          <PersonCircle className="login-icon" />
          <h2>Please log in to view profile information</h2>
          <p>You need to be logged in to view and manage recipe collections.</p>
          <button className="login-button" onClick={onLoginClick}>
            Login Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="about-us">
      <div className="profile-section">
        <div className="profile-header">
          <h1>Emma Gonzalez's Recipe Box</h1>
        </div>

        <div className="profile-info">
          <div className="profile-image">
            <img src={profileImage} alt="Emma Gonzalez" />
          </div>
          <div className="profile-details">
            <p>
              Emma Gonzalez is a deputy editor at Chefify, bringing her
              expertise as a former cooking editor at The Los Angeles Times. She
              is also an accomplished author, contributing to numerous cookbooks
              and food publications. Originally from East Los Angeles, Emma now
              resides in New York City, where she explores a wide range of
              culinary delights.
            </p>
            <div className="profile-stats">
              <span className="subscribers">6.5k Subscribes</span>
              <button className="share-btn">
                Share <Share />
              </button>
            </div>
          </div>
        </div>

        <div className="profile-nav">
          <button className="nav-btn active">Saved Recipes</button>
          <button className="nav-btn">Folders</button>
          <button className="nav-btn">Recipes by Genevieve</button>
        </div>
      </div>

      <div className="recipes-grid">
        {currentRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              {/* <div class="placeholder w-100"></div> */}
              <img src={recipe.image} alt="" srcset="" />
            </div>
            <div className="recipe-info d-flex flex-column">
              <Row>
                <Col md={8}>
                <h3>{recipe.title}</h3>
                
                </Col>
                <Col md={4} className="text-end">
                  <img src={ic73} alt="" />
                </Col>
              </Row>
              <p className="text-center"
                style={{backgroundColor: "#fbe1ee", color: "#f84986", width: "100px", borderRadius: "10px"}}
              >{recipe.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="prev-btn" onClick={() => handlePrevClick()}>
          ←
        </button>
        {renderPageNumbers()}
        <button className="next-btn" onClick={() => handleNextClick()}>
          →
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
