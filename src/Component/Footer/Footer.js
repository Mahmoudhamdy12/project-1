import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div>2022 <span><Link to='/' className='span'>Online Store</Link></span> All rights reserved</div>
      <div>Made by <a href='https://mahmoudhamdy-portfolio.netlify.app/'> Mahmoud Hamdy</a></div>
    </div>
  )
}

export default Footer