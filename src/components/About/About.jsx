import React from 'react'
import './About.css'
import founder from '../../assets/founder.jpg'
const About = () => {
  return (
    <div className='about'> 
        <div className="about-left">
         <img src={founder} alt="Hover Image"  className='about-img'/>
        <h3>Founder</h3>
        </div>
        <div className="about-right">
         <h2>"Building Dreams, Shaping Futures"</h2>
         <p>With over 30 years of hands-on experience in the construction industry, the founder of Abad Construction is a seasoned expert in building durable, high-quality homes. Having led and managed countless residential and commercial projects, his deep knowledge, attention to detail, and commitment to excellence have earned the trust of clients and partners alike. His leadership continues to guide Abad Construction toward innovation, reliability, and long-term success.</p>
         <p>Abad Construction is a trusted name in the construction industry, known for delivering top-tier residential, commercial, and government projects across the region. With a team of skilled professionals and a commitment to quality, we take pride in building everything from custom homes to large-scale public infrastructure. Our experience includes working on government contracts, ensuring strict compliance with regulations, safety standards, and timely delivery. At Abad Construction, we build with integrity, precision, and a vision for lasting impact.</p>
        </div>
    </div>
  )
}

export default About