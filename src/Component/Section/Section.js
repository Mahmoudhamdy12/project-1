import React from 'react'
import { Link } from 'react-router-dom'
import './Section.css'
const Section = () => {
  return (
    <main>
        <div className='container'>
            <article className='text'>
            <h1>Buy now at the best price</h1>
            <p className='lorem'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Iusto, at sed omnis corporis
                doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus,
                obcaecati libero et quia tempora excepturi quis alias?</p>
                <button className='btn-shop'><Link className='col' to='/products'>Shop Now</Link></button>
            </article>
                <img src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLWNhcmQtZ29vZ2xlLTA0LW1vY2t1cC5qcGc.jpg'/>
        </div>
    </main>
  )
}

export default Section