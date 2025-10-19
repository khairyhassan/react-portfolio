import React from 'react';
import './project.css';
import img1 from  '../../assets/platter restaurant.png'
import img2 from  '../../assets/Responsive Coffee Website.png'
import img3 from  '../../assets/weather app.png'
import img4 from  '../../assets/Khairy Hassan Portofolio.png'


const projectsData = [
  {
    id: 1,
    image:img1,
    title: 'platter restaurant',
    github: 'https://github.com/khairyhassan/platter-restaurant.git',
    netlify:'https://platter-restaurant.netlify.app/',
  },
  {
    id: 2,
    image:img2,
    title: 'coffee website',
    github: 'https://github.com/khairyhassan/Responsive-Coffee-Website.git',
    netlify:'https://gamal-coffee.netlify.app/',
  },
  {
    id: 3,
    image: img3,
    title: 'Weather App',
    github: 'https://github.com/khairyhassan/weather-app.git',
    netlify: 'https://simple-weather-applic.netlify.app/',
  },
  {
    id: 4,
    image:img4,
    title: ' Khairy Hassan Portfolio',
    github: 'https://github.com/khairyhassan/portofolio.git',
    netlify:'https://khairyhassan.netlify.app/',
  }
]
function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className="top-section">
        <h5>My Recent Work</h5>
        <h2>My Projects</h2>
      </div>
      <div className="container projects-container">
        {projectsData.map(({ id, image,title,github,netlify}) => 
        <article key={id} className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={image} alt="" />
          </div>
          <h3> {title}</h3>

          <div className="portfolio-item-btns">
            <a href={github} target='_blank' className="btn">Github</a>  
            <a href={netlify} className="btn btn-primary">Netlify</a>  
          </div>
          </article>
          )}
      </div>
    </section>
  )
}

export default Projects
