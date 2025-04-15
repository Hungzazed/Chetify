  import React, { useState, useEffect } from "react";
  import "../css/RecipeBox.css";
  import { BookmarkHeart, Clock, Star, StarFill } from "react-bootstrap-icons";
  import noResultsImage from "../assets/nothing.png";

  const RecipeBox = () => {
    const [selectedFilters, setSelectedFilters] = useState({
      type: [],
      time: { min: 30, max: 50 },
      rating: null,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("a-z");
    const [appliedFilters, setAppliedFilters] = useState(selectedFilters);
    const recipesPerPage = 6;

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      fetch("https://67f4df19913986b16fa2227d.mockapi.io/api/v1/food")
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((err) => console.error("Lỗi khi fetch dữ liệu:", err));
    }, []);
    const filterTypes = [
      // { label: "Vegetarian", value: "vegetarian" },
      // { label: "Fresh", value: "fresh" },
      // { label: "Mediterranean", value: "mediterranean" },
      // { label: "Asian", value: "asian" },
      // { label: "Seafood", value: "seafood" },
      // { label: "Classic", value: "classic" },
      // { label: "Grilled", value: "grilled" },
      // { label: "Creamy", value: "creamy" },
    ];

    const ratings = [5, 4, 3, 2, 1].map((rating) => ({
      value: rating,
      stars: Array(5)
        .fill(0)
        .map((_, index) => index < rating),
    }));

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

    const handleTypeChange = (value) => {
      setSelectedFilters((prev) => ({
        ...prev,
        type: prev.type.includes(value)
          ? prev.type.filter((t) => t !== value)
          : [...prev.type, value],
      }));
    };

    const handleApplyFilters = () => {
      setAppliedFilters(selectedFilters);
      setCurrentPage(1);
    };

    const handleSortChange = (e) => {
      setSortOrder(e.target.value);
    };

    const getFilteredAndSortedRecipes = () => {
      let filtered = recipes.filter((recipe) => {
        const typeMatch =
          appliedFilters.type.length === 0 ||
          recipe.type.some((t) => appliedFilters.type.includes(t));
        const timeMatch =
          recipe.time >= appliedFilters.time.min &&
          recipe.time <= appliedFilters.time.max;
        const ratingMatch =
          !appliedFilters.rating || recipe.rating >= appliedFilters.rating;

        return typeMatch && timeMatch && ratingMatch;
      });

      return filtered.sort((a, b) => {
        switch (sortOrder) {
          case "a-z":
            return a.title.localeCompare(b.title);
          case "z-a":
            return b.title.localeCompare(a.title);
          case "rating-high":
            return b.rating - a.rating;
          case "rating-low":
            return a.rating - b.rating;
          default:
            return 0;
        }
      });
    };

    const filteredAndSortedRecipes = getFilteredAndSortedRecipes();
    const totalPages = Math.ceil(
      filteredAndSortedRecipes.length / recipesPerPage
    );
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredAndSortedRecipes.slice(
      indexOfFirstRecipe,
      indexOfLastRecipe
    );

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

    const renderPageNumbers = () => {
      const pageButtons = [];

      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`page-btn ${currentPage === i ? "active" : ""}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
      // } else {
      //   if (currentPage <= 3) {
      //     for (let i = 1; i <= 4; i++) {
      //       pageButtons.push(
      //         <button
      //           key={i}
      //           className={`page-btn ${currentPage === i ? "active" : ""}`}
      //           onClick={() => handlePageClick(i)}
      //         >
      //           {i}
      //         </button>
      //       );
      //     }
      //     pageButtons.push(
      //       <span key="ellipsis1" className="ellipsis">
      //         ...
      //       </span>
      //     );
      //     pageButtons.push(
      //       <button
      //         key={totalPages}
      //         className={`page-btn ${currentPage === totalPages ? "active" : ""}`}
      //         onClick={() => handlePageClick(totalPages)}
      //       >
      //         {totalPages}
      //       </button>
      //     );
      //   } else if (currentPage >= totalPages - 2) {
      //     pageButtons.push(
      //       <button
      //         key={1}
      //         className={`page-btn ${currentPage === 1 ? "active" : ""}`}
      //         onClick={() => handlePageClick(1)}
      //       >
      //         1
      //       </button>
      //     );
      //     pageButtons.push(
      //       <span key="ellipsis2" className="ellipsis">
      //         ...
      //       </span>
      //     );
      //     for (let i = totalPages - 3; i <= totalPages; i++) {
      //       pageButtons.push(
      //         <button
      //           key={i}
      //           className={`page-btn ${currentPage === i ? "active" : ""}`}
      //           onClick={() => handlePageClick(i)}
      //         >
      //           {i}
      //         </button>
      //       );
      //     }
      //   } else {
      //     pageButtons.push(
      //       <button
      //         key={1}
      //         className={`page-btn ${currentPage === 1 ? "active" : ""}`}
      //         onClick={() => handlePageClick(1)}
      //       >
      //         1
      //       </button>
      //     );
      //     pageButtons.push(
      //       <span key="ellipsis1" className="ellipsis">
      //         ...
      //       </span>
      //     );
      //     for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      //       pageButtons.push(
      //         <button
      //           key={i}
      //           className={`page-btn ${currentPage === i ? "active" : ""}`}
      //           onClick={() => handlePageClick(i)}
      //         >
      //           {i}
      //         </button>
      //       );
      //     }
      //     pageButtons.push(
      //       <span key="ellipsis2" className="ellipsis">
      //         ...
      //       </span>
      //     );
      //     pageButtons.push(
      //       <button
      //         key={totalPages}
      //         className={`page-btn ${currentPage === totalPages ? "active" : ""}`}
      //         onClick={() => handlePageClick(totalPages)}
      //       >
      //         {totalPages}
      //       </button>
      //     );
      //   }
      }
      return pageButtons;
    };
    return (
      <div className="search-results-container">
        <div className="filters-section">
          <h2>FILTERS</h2>

          <div className="filter-group">
            <h3>
              Type <span className="arrow">^</span>
            </h3>
            <div className="checkbox-group">
              {filterTypes.map((type) => (
                <label key={type.value} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedFilters.type.includes(type.value)}
                    onChange={() => handleTypeChange(type.value)}
                  />
                  {type.label}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>
              Time <span className="arrow">^</span>
            </h3>
            <div className="time-slider">
              <div className="slider-track">
                <div className="slider-range"></div>
                <span className="time-label" style={{ left: "12%" }}>
                  30 minutes
                </span>
                <span
                  className="time-label"
                  style={{ right: "12%", transform: "translateX(50%)" }}
                >
                  50 minutes
                </span>
              </div>
            </div>
          </div>

          <div className="filter-group">
            <h3>
              Rating <span className="arrow">^</span>
            </h3>
            <div className="rating-options d-flex flex-wrap">
              {ratings.map((rating, index) => (
                <label key={index} className="rating-label">
                  <input
                    type="checkbox"
                    checked={selectedFilters.rating === rating.value}
                    onChange={() =>
                      setSelectedFilters((prev) => ({
                        ...prev,
                        rating:
                          rating.value === prev.rating ? null : rating.value,
                      }))
                    }
                  />
                  <div className="stars">
                    {rating.stars.map((filled, i) => (
                      <span key={i} className={`star ${filled ? "filled" : ""}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button className="apply-filters-btn" onClick={handleApplyFilters}>
            Apply
          </button>
        </div>

        <div className="results-section">
          <div className="search-header">
            <h2>Salad ({filteredAndSortedRecipes.length})</h2>
            <div className="sort-dropdown">
              <select value={sortOrder} onChange={handleSortChange}>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="rating-high">Rating (High to Low)</option>
                <option value="rating-low">Rating (Low to High)</option>
              </select>
            </div>
          </div>

          {filteredAndSortedRecipes.length > 0 ? (
            <>
              <div className="recipes-grid">
                {currentRecipes.map((recipe) => (
                  <div key={recipe.id} className="recipe-card">
                    <div className="recipe-image">
                      <img src={recipe.image} alt={recipe.title} />
                      <button className="bookmark-btn">
                        <BookmarkHeart />
                      </button>
                    </div>
                    <div className="recipe-info">
                      <h3>{recipe.title}</h3>
                      <div className="recipe-meta">
                        <span className="cooking-time">
                          <Clock /> {recipe.time} minutes
                        </span>
                        <div className="recipe-rating">
                          {Array(5)
                            .fill(0)
                            .map((_, index) => (
                              <span key={index}>
                                {index < recipe.rating ? <StarFill /> : <Star />}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <button className="prev-btn" onClick={handlePrevClick}>
                  ←
                </button>
                {renderPageNumbers()}
                <button className="next-btn" onClick={handleNextClick}>
                  →
                </button>
              </div>
            </>
          ) : (
            <div className="no-results">
              <h2>Sorry, no results were found</h2>
              <img
                src={noResultsImage}
                alt="No results found"
                className="no-results-image"
              />
              <p>
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <div className="suggestion-tags">
                <span className="tag sweet">Sweet Cake</span>
                <span className="tag black">Black Cake</span>
                <span className="tag pozole">Pozole Verde</span>
                <span className="tag healthy">Healthy food</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default RecipeBox;
