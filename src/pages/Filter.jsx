import React, { useRef, useState } from 'react'
import { Container, Row, Col, Form, Button, Pagination } from 'react-bootstrap'
import notFound from '../assets/Lab_02/nothing.png'
import li from '../assets/Lab_02/list_filter.png'
import r1 from '../assets/Lab_02/rating_1.png'
import r2 from '../assets/Lab_02/rating_2.png'
import r3 from '../assets/Lab_02/rating_3.png'
import r4 from '../assets/Lab_02/rating_4.png'
import r5 from '../assets/Lab_02/rating_5.png'
import slider from '../assets/Lab_02/slider.png'
import '../css/Filter.css'
import { useParams } from 'react-router-dom'
import { useCook } from '../context/CookContext'
import RecipeCard from '../components/RecipeCard'

const Filter = () => {
    const {search} = useParams();
    const { recipes } = useCook();
    const listRef = useRef(null);
    const scrollToTop = () => {
      if (listRef.current) {
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()));
    const recipesPerPage = 9;
    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const currentRecipes = filteredRecipes.slice(startIndex, endIndex);
    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            scrollToTop();
        }
      }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            scrollToTop();
        }
      }
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    }

  const cookingTypes = [
    { id: 'pan-fried', label: 'Pan-fried' },
    { id: 'stir-fried', label: 'Stir-fried' },
    { id: 'grilled', label: 'Grilled' },
    { id: 'roasted', label: 'Roasted' },
    { id: 'sauteed', label: 'Sautéed' },
    { id: 'baked', label: 'Baked' },
    { id: 'steamed', label: 'Steamed' },
    { id: 'stewed', label: 'Stewed' }
  ];

  const ratings = [5, 4, 3, 2, 1];

  const suggestedTags = [
    { id: 'sweet-cake', label: 'Sweet Cake', color: '#FFE4E4' },
    { id: 'black-cake', label: 'Black Cake', color: 'rgb(235, 91, 240)' },
    { id: 'pozole-verde', label: 'Pozole Verde', color: '#FFE4E4' },
    { id: 'healthy-food', label: 'Healthy food', color: '#E4F4FF' }
  ];

  return (
    <Container className="py-5 mt-1 mb-5">
      <Row>
        <Col md={3} className='mb-3'>
          <div className="filter-sidebar p-4 rounded-3">
            <div className="d-flex align-items-center mb-4 pb-2">
                <img src={li} className='img-fluid' alt="" />
                <h5 className="m-0 fw-bold">FILTERS</h5>
            </div>

            <div className="filter-section mb-4">
              <h6 className="fw-bold mb-3 d-flex justify-content-between">
                Type <span className="text-muted">▼</span>
              </h6>
              <Form className='row ms-1'>
                {cookingTypes.map(type => (
                  <Form.Check
                    key={type.id}
                    type="checkbox"
                    id={type.id}
                    label={type.label}
                    className="mb-2 col-6"
                  />
                ))}
              </Form>
            </div>

            <div className="filter-section mb-4">
              <h6 className="fw-bold mb-3 d-flex justify-content-between">
                Time <span className="text-muted">▼</span>
              </h6>
              <div>
                <div className="d-flex justify-content-evenly mt-2" style={{fontSize: '0.7rem'}}>
                  <span>30 minutes</span>
                  <span>50 minutes</span>
                </div>
                <img src={slider} className='img-fluid' alt="" />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-section mb-4">
              <h6 className="fw-bold mb-3 d-flex justify-content-between">
                Rating <span className="text-muted">▼</span>
              </h6>
              <Form>
                {ratings.map(rating => (
                  <Form.Check
                    key={rating}
                    type="checkbox"
                    id={`rating-${rating}`}
                    label={
                      <div className="d-flex align-items-center">
                        <img src={rating === 5 ? r5 : rating === 4 ? r4 : rating === 3 ? r3 : rating === 2 ? r2 : r1} alt={`Rating ${rating}`} className="me-2" />
                      </div>
                    }
                    className="mb-2"
                  />
                ))}
              </Form>
            </div>

            <Button variant="primary" className="w-100 apply-btn">
              Apply
            </Button>
          </div>
        </Col>

        <Col>
          {filteredRecipes.length > 0 ? 
            (
              <div ref={listRef}>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h3 className='fw-bold'>{search.charAt(0).toUpperCase() + search.substring(1).toLowerCase() + ' (' + (filteredRecipes.length + 1) + ')'}</h3>
                  <Form>
                    <Form.Select className="mb-3 form-form-select-auto" aria-label="Default select example">
                      <option value="1">A-Z</option>
                      <option value="2">Z-A</option>
                      <option value="3">Relatest</option>
                    </Form.Select>
                  </Form>
                </div>
                <Row className='justify-content-between'>
                  {currentRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </Row>
                <Pagination className='justify-content-end'>
                  <Pagination.Prev onClick={handlePrevPage} />
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageClick(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={handleNextPage} />
                </Pagination>
              </div>
            ) 
            : 
            <div className="text-center py-5">
            <h3 className="mb-4 fw-bolder">Sorry, no results were found for "{search}"</h3>
            <img src={notFound} alt="No results found" className="mb-4" style={{ maxWidth: '200px' }} />
            <p className="text-muted mb-4">We have all your Independence Day sweets covered.</p>
            
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              {suggestedTags.map(tag => (
                <Button
                  key={tag.id}
                  variant="light"
                  className="rounded-pill px-3 py-2"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.label}
                </Button>
              ))}
            </div>
          </div>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Filter