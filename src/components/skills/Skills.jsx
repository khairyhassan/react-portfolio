import React from 'react';
import './skills.css';
import css from '../../assets/css3.svg';
import express from '../../assets/expressjs.svg';
import figma from '../../assets/figma.svg';
import javascript from '../../assets/javascript.svg';
import mongodb from '../../assets/mongodb.svg';
import nodejs from '../../assets/nodejs.svg';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwindcss.svg';

const skillsData = [
  {
    id: 1,
    image: css,
    title: 'CSS',
    disc:'user interface'  
  },
  {
    id: 2,
    image: javascript,
    title: 'Javascript',
    disc:' interaction'  
  },
  {
    id: 3,
    image: react,
    title: 'React',
    disc:'framework'  
  },
  {
    id: 4,
    image: nodejs,
    title: 'Nodejs',
    disc:'web server'  
  },
  {
    id: 5,
    image: express,
    title: 'Express',
    disc:'node framework'  
  },
  {
    id: 6,
    image: tailwind,
    title: 'Tailwind',
    disc:'user interface'  
  },
  {
    id: 7,
    image: mongodb,
    title: 'Mongodb',
    disc:'database'  
  },
  {
    id: 8,
    image: figma,
    title: 'Figma',
    disc:'design tool'  
  },
]
function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container-skills">
        {skillsData.map(({ id, image, title, disc }) =>
        
        <article className='card-skill'>
          <div className="icon">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h4>{title}</h4>
              <p className="text-light">{disc}</p>
          </div>
          </article>
          )}
      </div>
    </section>
  )
}

export default Skills;
