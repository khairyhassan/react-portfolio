import React from 'react';
import './home.css';
import me from '../../assets/me.png';
import CV from '../../assets/cv.pdf';
import HomeSocials from './HomeSocials'



function Home() {
  return (
    <div className='home'>
      <div className="container home-container">
        <h4>Hello I'm</h4>
        <h1>Khairy Hassan </h1>
        <h4 className='text-light'>Frontend Developer </h4>
        <div className="btns">
          <a href={CV} className="btn" download>Download CV</a>
          <a href="#" className="btn btn-primary">let's talk </a>
        </div>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#about" className='scroll-down'>Scroll Down</a>
        <HomeSocials/>
      </div>
    </div>
  )
}

export default Home
