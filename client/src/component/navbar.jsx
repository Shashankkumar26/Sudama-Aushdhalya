import React, { useState ,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  useEffect(()=>{
    setExpanded(false);
  },[location])

  return (
    <header>
      <a href="/" className="logo">
        <i className="ri-home-heart-fill"></i> <span className="sudama">S</span> <span className="Aush">A</span>
      </a>
      <ul className={expanded ? 'navbar open' : 'navbar'} onClick={toggleNavbar}>
        <li>
          <Link to="/">
            <a className={location.pathname === '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <a className={location.pathname === '/about' ? 'active' : ''}>About us</a>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <a className={location.pathname === '/services' ? 'active' : ''}>Services</a>
          </Link>
        </li>
        
      </ul>
      <ul className="main">
        <a href="/login" className="user">
          <i className="ri-user-fill"></i>Login
        </a>
        <a href="/register">Register</a>
        <i className="ri-menu-line" id="menu-icon" onClick={toggleNavbar}></i>
      </ul>
    </header>
  );
};

export default Navbar;
