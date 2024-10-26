import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Products from './Products';
import PrivateRoute from './PrivateRoute';

function App() {
  const [token, setToken] = useState(null); // Track authentication state

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | <Link to="/products">Products</Link> | 
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route 
          path="/products" 
          element={
            <PrivateRoute token={token}>
              <Products />
            </PrivateRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
