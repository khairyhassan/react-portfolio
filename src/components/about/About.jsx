import React from 'react';
import './about.css';
import me from '../../assets/me.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";




function About() {
  return (
    <section className='about' id='about'>

      <div className="top-section">
        <h5>Get To Knwo</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about-container">

        <div className="about-me">
          <div className="about-me-image">
            <img src={me}/>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-cards">

            <div className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </div>

            <div className="about-card">
              <FiUsers  className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </div>

            <div className="about-card">
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>20+completede</small>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            reprehenderit animi in esse rem quisquam odit sit.
            Id asperiores fugiat officiis distinctio quasi et amet tempora,
            pariatur eius veniam ullam voluptates corrupti, labore vel optio
            eligendi a ea ipsum! Iusto,eveniet impedit nemo quae velit et aut
            perspiciatis id accusantium.</p>
         <a href="#contact" className="btn btn-primary">let's talk </a>
        </div>
      </div>
    </section>
  )
}

export default About
