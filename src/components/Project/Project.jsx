import React from 'react'
import './Project.css'
import project1 from '../../assets/images.jfif'
import project2 from '../../assets/images1.jfif'
import project3 from '../../assets/images2.jfif'

const Project = () => {
  return (
    <div className='project'>
        <h3>OUR PROJECTS</h3>
        
        <div className="gallary">
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project2} alt="" />
            <img src={project1} alt="" />

        </div>
        <button className='btn dark-btn'>See More</button>
    </div>
  )
}

export default Project