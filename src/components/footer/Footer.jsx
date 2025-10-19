import React from 'react';
import './foote.css';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">Khairy Hassan</a>
      <ul className="permaLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="#" target='_blank'><FaFacebookF/></a>
        <a href="#" target='_blank'><FaInstagram/></a>
        <a href="#" target='_blank'><FaXTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; <a href="#">Khairy Hassan </a>All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
