import React from 'react';
import '../style/Footer.css'; // Import your footer CSS file
import { RiWhatsappLine, RiPhoneLine, RiInformationLine, RiUserAddLine, RiFileListLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        <ul className="footer-links">
          <li>
            <a href="tel:+7870382156">
              <RiPhoneLine className='logo'/> Call
            </a>
          </li>
          <li>
            <a href="https://wa.me/9931618534">
              <RiWhatsappLine className='logo'/> Whatsapp
            </a>
          </li>
          <li>
            <a href="/about">
              <RiInformationLine className='logo'/> About Us
            </a>
          </li>
          <li>
            <a href="/register">
              <RiUserAddLine className='logo'/> Register
            </a>
          </li>
          <li>
            <a href="/terms">
              <RiFileListLine className='logo'/> Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
