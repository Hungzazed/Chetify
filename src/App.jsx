import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Dialog from './components/Dialog'
import LoginDialog from './components/LoginDialog'
import RecipeBox from './components/RecipeBox'
import AboutUs from './pages/AboutUs'
import Recipes from './pages/Recipes'
import { CookProvider } from './context/CookContext'
import CookingGuide from './pages/CookingGuide'
import Filter from './pages/Filter';
import WhatToCook from './pages/WhatToCook';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  const handleLoginClick = () => {
    setIsLoginDialogOpen(true);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoginDialogOpen(false);
  };

  return (
    <CookProvider>
      <Router>
        <div className="app">
          <Header
            user={user}
            onLoginClick={handleLoginClick}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes user={user}/>} />
            <Route path="/ingredients" element={<></>} />
            <Route path="/occasions" element={<></>} />
            <Route path="/cooking-guide" element={<CookingGuide></CookingGuide>} />
            <Route path="/filter/:search" element={<Filter></Filter>} />
            <Route path="/whattocook" element={<WhatToCook></WhatToCook>} />
            <Route
              path="/about"
              element={<AboutUs user={user} onLoginClick={handleLoginClick} />}
            />
          </Routes>
          <Footer />
          <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
          <LoginDialog
            isOpen={isLoginDialogOpen}
            onClose={() => setIsLoginDialogOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </div>
      </Router>
    </CookProvider>
  )
}

export default App