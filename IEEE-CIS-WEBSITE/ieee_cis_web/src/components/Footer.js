import React from 'react'
import insta from '../img/insta.png'
import wp from '../img/wp.png'

const Footer = () => {
  return (
    <section className='footer'>
        <div className='flex'>
          <img src={insta} alt='instagram'></img>
          <img src={wp}  alt='WhatsApp'></img>
        </div>
        <p>Email : ieee_cis_rec@gmail.com</p>
        <p>Contact : 938168</p>
    </section>
  )
}

export default Footer