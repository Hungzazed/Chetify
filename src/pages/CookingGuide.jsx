import React, { useState } from 'react'
import arrow from '../assets/Lab_02_b/Arrow forward ios 2.png'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import avt from '../assets/avatar.png'
import save from '../assets/image.png'
import img1 from '../assets/straw_cake.png'
import img2 from '../assets/step1.png'
import img3 from '../assets/step3.png'
import img4 from '../assets/step6.png'
import { useCook } from '../context/CookContext'
import RecipeCard from '../components/RecipeCard'
import { Plus } from 'react-bootstrap-icons'

const CookingGuide = () => {
    const { recipes } = useCook();

  const [activeTab, setActiveTab] = useState('all');
  const ingredients = [
    { item: 'Yield: 4 generous servings' },
    { item: '2 pints ripe, well-rinsed strawberries' },
    { item: '1/2 cup sugar, or more to taste' },
    { item: '4cups flour' },
    { item: '3 tablespoons sugar' },
    { item: '1/4 teaspoon salt' },
    { item: '5 teaspoons baking powder' },
    { item: '1 1/4 cups butter' },
    { item: '3 cups whipping cream' },
    { item: '½ teaspoon vanilla extract' }
  ];

  const steps = [
    {
      step: 1,
      description: 'Pick over and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the ½ cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.',
      image: img2
    },
    {
      step: 2,
      description: 'Preheat oven to 450 degrees.',
      image: null
    },
    {
      step: 3,
      description: 'Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add ½ cup of softened butter, and rub into dry ingredients as for pastry. Add 1¼ cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about ½-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds - 2 rounds per serving.',
      image: img3
    },
    {
      step: 4,
      description: 'Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.',
      image: null
    },
    {
      step: 5,
      description: 'Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.',
      image: null
    },
    {
      step: 6,
      description: 'Beat remaining cream until it thickens. Add vanilla. Beat again just until thick.',
      image: img4
    }
  ];

  const comments = [
    {
      id: 1,
      author: 'Jimmy Will',
      avatar: avt,
      content: 'Enim consectetur enim magna sit sit ullamco et dolore veniam nulla labore laboris anim eiusmod voluptate qui esse amet. Non cupidatat sunt duis occ',
      time: '08:10 AM'
    },
    {
      id: 2,
      author: 'Alisa Grill',
      avatar: avt,
      content: 'Culpa esse pariatur deserunt reprehenderit fugiat incididunt exercitation dolore id officia officia duis Lorem et elit do eu est tempor. Tempor consequat qui laborum do qui sit laboris tempor culpa sit deserunt reprehenderi...',
      time: '08:10 AM',
      images: [img2, img3]
    },
    {
      id: 3,
      author: 'Chris Helison',
      avatar: avt,
      content: 'Labore ea est enim esse officia anim consequat cillum deserunt pariatu...',
      time: '09:42 AM'
    },
    {
      id: 4,
      author: 'Emma Gonzalez',
      avatar: avt,
      content: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est laborum labore 😊 Mollit commodo in do dolor ut in mollit est',
      time: '08:10 AM'
    }
  ];

  return (
    <Container>
      <nav className="pt-3 mb-5">
        <ol className="breadcrumb d-flex align-items-center">
          <li className="breadcrumb-item">
            <Link to="/" className="text-dark text-decoration-none me-2">Home</Link>
          </li>
          <img src={arrow} width={20} height={20} alt="" />
          <li className="active text-pink ms-2">Cooking guide</li>
        </ol>
      </nav>

      <Row className='mb-5'>
        <Col lg={5} md={12}>
           <h2 className='fw-bold mt-4'>How to make a Strawberry Shortcake</h2>
          <p className='mt-3'>
            It seems like there may be a misunderstanding. If you're asking how a user can make a Strawberry Shortcake, the process would be identical to the recipe I shared earlier. It involves preparing the strawberries, making the shortcakes, preparing whipped cream, and finally assembling the shortcake.
          </p>

          <div className='border rounded-3 shadow-lg p-4'>
            <div className='d-flex align-items-center justify-content-between mt-1 ms-2'>
                <div>
                    <img src={avt} alt="" className='rounded-circle' />
                    <span className='ms-2 fs-4 fw-medium'>Emma Gonzalez</span>
                </div>
                <img src={save} alt="Save" width={40} height={40} style={{ cursor: 'pointer' }} />
            </div>

            <div className='d-flex justify-content-between text-center gap-lg-5 pt-2 mt-5 ms-2' style={{fontSize: '1em'}}>
                <div>
                    <p className='mb-1'>Time:</p>
                    <p className='text-muted fw-medium'>45 minutes</p>
                </div>
                <div>
                    <p className='text-muted mb-1'>Notes</p>
                    <p className='text-muted fw-medium'>352 community notes</p>
                </div>
                <div>
                <p className='text-muted mb-0'>Rating:</p>
                <div className='d-flex justify-content-center mb-4' style={{fontSize: '1.5em'}}>
                    {'★★★★☆'.split('').map((star, index) => (
                    <span key={index} style={{ color: index < 4 ? '#ffc107' : '#ccc' }}>{star}</span>
                    ))}
                </div>
                </div>
            </div>
          </div>
          <div className='rounded-3 p-4 mt-4' style={{border: '2px dashed  #f05b91', fontSize: '1.2em'}}>
            {ingredients.map((ing, index) => (
              <p key={index} className='mb-3'> - {ing.item}</p>
            ))}
            <Button variant='pink' className='w-100 mt-3 d-flex align-items-center justify-content-center gap-2 rounded-4'>
                <Plus size={27}></Plus>   Add to Your Grocery List
            </Button>
          </div>
        </Col>
        <Col lg={5} md={12}>
          <img src={img1} alt="Strawberry Shortcake" className='w-100 rounded-4 mt-4' />

          <div className='mt-5'>
            {steps.map((step, index) => (
              <div key={index} className='mb-5'>
                <h5 className='fw-bold mb-3'>Step {step.step}</h5>
                <p className='text-muted'>{step.description}</p>
                {step.image && (
                  <img src={step.image} alt={`Step ${step.step}`} className='rounded-3 w-100 mt-3' />
                )}
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <div className='mb-5'>
        <h4 className='fw-bold mb-4'>Cooking note</h4>
        <div className='position-relative'>
          <Form>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="State your opinion about the article"
              className='mb-3 pe-5 border-2 text-muted'
            />
            <Button 
              className='position-absolute text-white'
              style={{ 
                backgroundColor: '#f05b91',
                border: 'none',
                right: '20px',
                bottom: '20px',
                borderRadius: '10px',
                padding: '6px 25px'
              }}
            >
              Send
            </Button>
          </Form>
        </div>

        <Nav variant="underline" className="mb-4 recipe-nav">
            <Nav.Item>
            <Nav.Link 
                className={activeTab === 'all' ? 'active' : ''} 
                onClick={() => setActiveTab('all')}
            >
                All Notes
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link 
                className={activeTab === 'helpful' ? 'active' : ''} 
                onClick={() => setActiveTab('helpful')}
            >
                Most Helpful
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link 
                className={activeTab === 'private' ? 'active' : ''} 
                onClick={() => setActiveTab('private')}
            >
                Private 
            </Nav.Link>
            </Nav.Item>
        </Nav>

        <div className='mt-4'>
          {comments.map(comment => (
            <div key={comment.id} className='mb-4 pb-4 border-bottom'>
              <div className='d-flex justify-content-between align-items-start mb-3'>
                <div className='d-flex align-items-center'>
                  <img src={comment.avatar} alt={comment.author} className='rounded-circle' width={40} height={40} />
                  <div className='ms-2'>
                    <h6 className='mb-0'>{comment.author}</h6>
                  </div>
                </div>
                <span className='text-muted small'>{comment.time}</span>
              </div>
              <p className='text-muted mb-3'>{comment.content}</p>
              {comment.images && (
                <div className='d-flex gap-3'>
                  {comment.images.map((img, index) => (
                    <img key={index} src={img} alt="" className='rounded-3' style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
                  ))}
                </div>
              )}
              <div className='d-flex gap-3 mt-3'>
                <Button variant='link' className='text-muted p-0 text-decoration-none'>
                  <i className='bi bi-hand-thumbs-up me-1'></i> Like
                </Button>
                <Button variant='link' className='text-muted p-0 text-decoration-none'>Reply</Button>
              </div>
            </div>
          ))}
          <Button variant='link' className='text-pink text-decoration-none p-0 position-absolute start-50 translate-middle-x'>
            Show more discussion (47)
          </Button>
        </div>
      </div>
      <div className='py-5'>
          <div>
            <h3 className='fw-bold mt-3'>Your Recently Viewed</h3>
          </div>
          <Row className='mb-5 pt-3 justify-content-between'>
            {recipes.slice(0, 4).map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </Row>
        </div>
    </Container>
  )
}

export default CookingGuide