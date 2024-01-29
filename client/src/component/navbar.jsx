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
        <i className="ri-home-heart-fill"></i> <span className="sudama">Sudama</span> <span className="Aush">Aushdhalya</span>
      </a>
      <ul className={expanded ? 'navbar open' : 'navbar'} onClick={toggleNavbar}>
        <li>
          <Link to="/">
            <a href="/" className={location.pathname === '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <a href="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</a>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <a  href="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</a>
          </Link>
        </li>
        
      </ul>
      <ul className="main">
        <a href="/tel:+919931618534" className="user">
        <i class="ri-phone-line"></i>9931618534
        </a>
        
        <i className="ri-menu-line" id="menu-icon" onClick={toggleNavbar}></i>
      </ul>
    </header>
  );
};

export default Navbar;
