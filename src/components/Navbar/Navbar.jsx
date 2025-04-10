import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import menuicon from '../../assets/menuicon.png'

import { Link } from 'react-scroll'

const Navbar = () => {

  const[sticky,setsticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>500? setsticky(true): setsticky(false);
    })
  },[]);
  const[mobileMenu,setmobileMenu]=useState(false)
  const toggleMenu=()=>{
    mobileMenu? setmobileMenu(false):setmobileMenu(true);

  }
  return (
   <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt=""  className='logo'/>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
    <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
    <li><Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
    <li><Link to='project' smooth={true} offset={-150} duration={500}>Projects</Link></li>
    <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn dark-btn'>Contactus</Link></li>  
    </ul>
    <img src={menuicon} alt="" className='menu-icon' onClick={toggleMenu} />
   </nav>
  )
}

export default Navbar