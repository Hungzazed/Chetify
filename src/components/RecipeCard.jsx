import React from 'react'
import { Card, Col } from 'react-bootstrap'
import ic73 from '../assets/Lab_02_b/Icon Button 73.png'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/cooking-guide/`)
  }
  return (
    <div className='col-auto rc mb-3' key={recipe.id} style={{width: '20em'}}
     onClick={handleClick}
    >
      <Card>
        <div>
          <Card.Img variant="top" src={recipe.image} style={{height: '12em'}} />
        </div>
        <Card.Body className="px-2" style={{height: '7em'}}>
          <div className="row" style={{height: '2em'}}>
            <div className="col-9">
              <Card.Title className="h6 fw-bolder">{recipe.title}</Card.Title>
            </div>
            <div className="col-3 text-end">
              <img src={ic73} alt="" />
            </div>
          </div>
          <div className="row mt-4">
              <Card.Text>
              <p className="text-center"    
                style={{backgroundColor: "#fbe1ee", color: "#f84986", width: "100px", borderRadius: "10px"}}
              >{recipe.time}</p>
              </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RecipeCard 