import React from 'react';
import { Route,Router,Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
// import ErrorPage from './pages/ErrorPage'; // Add an error page component

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
    </> // Add a catch-all route for error handling
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
