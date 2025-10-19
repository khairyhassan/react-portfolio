import React from 'react';
import './services.css';
import { MdDesignServices } from 'react-icons/md';
import { IoIosRocket } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';

function Services() {
  return (
    <section className='services' id='services'>
      <div className="top-section">
        <h5>what I offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container services-container">
        
        <article className='card'>
          <MdDesignServices className='icon' />
          <h3>Web Design</h3>
          <p className="text-light">Lorem,
            ipsum dolor sit amet consectetur
            adipisicing elit. Et, laborum.</p>
        </article>

        <article className='card'>
          <IoIosRocket className='icon' />
          <h3>Fast Performance</h3>
          <p className="text-light">Lorem,
            ipsum dolor sit amet consectetur
            adipisicing elit. Et, laborum.</p>
        </article>

        <article className='card'>
          <FaCode className='icon' />
          <h3>Clean Code</h3>
          <p className="text-light">Lorem,
            ipsum dolor sit amet consectetur
            adipisicing elit. Et, laborum.</p>
        </article>

      </div>
    </section>
  )
}

export default Services
