import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
    return (
    <div className='about'>
        <h1 className='col'><Link className='col' to='/'>Home</Link>/ About</h1>
        <div className='container'>
            <div className='story'>
                <div>
                <img src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLWNhcmQtZ29vZ2xlLTA0LW1vY2t1cC5qcGc.jpg'/>
                </div>
                <article className='text'>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
                        delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
                        Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis
                        est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus
                        unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi,
                        eum totam velit saepe sed quos similique amet. Ex,
                        voluptate accusamus nesciunt totam vitae esse iste.</p>
                </article>
            </div>
        </div>
    </div>
    )
}

export default About