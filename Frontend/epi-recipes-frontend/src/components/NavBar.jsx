import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Create a separate CSS file for styling

const NavBar = () => {
  return (
    <nav className="top-nav">
      <div className="logo">
        <img src="https://media.licdn.com/dms/image/v2/D560BAQGNuXsGUBddAg/company-logo_200_200/company-logo_200_200/0/1666854408230/rapidious_logo?e=2147483647&v=beta&t=HV1UB-7pvK9ee3Qv--Q39Ij8FbBRJUnGnDJHzCXZ7QE" alt="EpiRecipes Logo" /> {/* Replace with your logo path */}
      </div>
      <ul className="nav-links">
      <li><Link to="/">Rapidious Ecomm</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
