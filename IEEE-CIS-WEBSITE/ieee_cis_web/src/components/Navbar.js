import React from 'react'
import '../styles/navbar.css'
import icon from '../img/ieee-icon.png'

export const Navbar = () => {
  return (
    <section className='nav-content'>
        <div className='icon'>
           <img src={icon} alt='IEEE icon'></img>
        </div>
        <div className='nav-bar'>
           <p >Home</p>
           <p>Domain</p>
           <p>Events</p>
           <p>about us</p>
           <p>Our crew</p>
       </div>
    </section>
  )
}
