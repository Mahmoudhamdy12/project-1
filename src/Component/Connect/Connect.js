import React from 'react'
import './Connect.css'
const Connect = () => {
  return (
    <section className='connect'>
        <div className='container'>
        <h1 className='title'>Join our newsletter and get 20% off</h1>
        <div className='content'>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat sint unde quaerat ratione soluta veniam provident
            adipisci cumque eveniet tempore?</p>
            <form className='connect-form'>
                <input type='email' placeholder='Enter Email' />
                <button className='connect-btn'>Subscribe</button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default Connect