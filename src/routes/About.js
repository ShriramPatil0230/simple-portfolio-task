import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
     <div className="hero">
      <div className="mask">

          
        <div className="content">
          <p>Shriram Patil</p>
          
          <h1>Frontend Developer</h1>
          

          
          <div>

          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
          </div>
          </div>
      </div>

    </div>
     <Navbar/>
    </div>
  )
}

export default About
