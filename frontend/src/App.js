import React from 'react'
import './App.css';
import Homepage from './Pages/Homepage';
 import LoginSignup from './Components/LoginSignup/LoginSignup';
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import Hero from './Components/Hero/Hero.js'


 const router = createBrowserRouter([
  {
      path: '/',
      element: <LoginSignup></LoginSignup>
  },
  {
      path: '/home',
      element: <Homepage></Homepage>
  },
]);
export default function App() {
  return (
      <main>
          <RouterProvider router={router}></RouterProvider>
      </main>
  );
}



