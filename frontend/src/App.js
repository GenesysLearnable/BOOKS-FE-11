import React from 'react';
// import './App.css';
import Homepage from './Pages/Homepage';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './Components/Hero/Hero.js';

import GlobalStyle from './styles/GlobalStyles';
import Main from './Components/ProfilePageComponents/Main.jsx';
import Searchpage from './Pages/Searchpage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginSignup></LoginSignup>,
  },
  {
    path: '/home',
    element: <Homepage></Homepage>,
  },
  {
    path: '/profile',
    element: <Main></Main>,
  },
  {
    path: '/search',
    element: <Searchpage></Searchpage>,
  },
]);
export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>

      {/* <Homepage /> */}
    </>
  );
}
