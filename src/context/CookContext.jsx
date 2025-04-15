import React, { createContext, useContext, useState } from 'react'
import recipe1 from '../assets/Lab_02_b/Italian-style tomato.png'
import recipe2 from '../assets/Lab_02_b/Vegetable and shrimp spaghetti.png'
import recipe3 from '../assets/Lab_02_b/Lotus delight salad.png'
import recipe4 from '../assets/Lab_02_b/Snack cakes.png'
import recipe5 from '../assets/Lab_02_b/Salad with cabbage.png'
import recipe6 from '../assets/Lab_02_b/Bean, shrimp, and potato salad.png'
import recipe7 from '../assets/Lab_02_b/Sunny-side up fried eggs.png'
import recipe8 from '../assets/Lab_02_b/Lotus delight salad_01.png'
import recipe9 from '../assets/Lab_03/cucumber_salad_charry_tomatoes.png'
import recipe10 from '../assets/Lab_03/Potato Salad.png'
import recipe11 from '../assets/Lab_03/five_color_salad.png'
import recipe12 from '../assets/Lab_03/corn_salad.png'
import recipe13 from '../assets/Lab_03/avacador_salad.png'

const CookContext = createContext()

export const CookProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    
    const recipes = [
      {
        id: 1,
        image: recipe1,
        title: "Italian-style tomato salad",
        time: "32 minutes"
      },
      {
        id: 2,
        image: recipe2,
        title: "Vegetable and shrimp spaghetti",
        time: "15 minutes"
      },
      {
        id: 3,
        image: recipe3,
        title: "Lotus delight salad",
        time: "32 minutes"
      },
      {
        id: 4,
        image: recipe4,
        title: "Snack cakes",
        time: "21 minutes"
      },
      {
        id: 5,
        image: recipe5,
        title: "Salad with cabbage and shrimp",
        time: "32 minutes"
      },
      {
        id: 6,
        image: recipe6,
        title: "Bean, shrimp, and potato salad",
        time: "32 minutes"
      },
      {
        id: 7,
        image: recipe7,
        title: "Sunny-side up fried eggs",
        time: "32 minutes"
      },
      {
        id: 8,
        image: recipe8,
        title: "Lotus delight salad",
        time: "32 minutes"
      },
      {
        id: 9,
        image: recipe9,
        title: "Cucumber salad, cherry tomatoes",
        time: "32 minutes"
      },
      {
        id: 10,
        image: recipe10,
        title: "Potato Salad",
        time: "32 minutes"
      },
      {
        id: 11,
        image: recipe11,
        title: "Five-color salad",
        time: "32 minutes"
      },
      {
        id: 12,
        image: recipe12,
        title: "Corn Salad",
        time: "32 minutes"
      },
      {
        id: 13,
        image: recipe13,
        title: "Avocado Salad",
        time: "32 minutes"
      }
    ];

    const users = [
      {
        id: 1,
        email: "admin@gmail.com",
        role: "admin"
      },
      {
        id: 2,
        email: "hiep@gmail.com",
        role: "user"
      }
    ]


  return (
    <CookContext.Provider value={{isLogin, setIsLogin, recipes, users, setCurrentUser, currentUser, isAdmin, setIsAdmin}}>
        {children}
    </CookContext.Provider>
  )
}

export const useCook = () => useContext(CookContext);