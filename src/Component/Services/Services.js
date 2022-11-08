import React from 'react'
import { MdEditLocation, MdTipsAndUpdates, MdVrpano } from 'react-icons/md'
import './services.css'
const Services = () => {
  return (
    <div className='services'>
        <div className='container'>
        <div className='headers'>
            <h1>Services</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe dolorum debitis consectetur reprehenderit non 
                aliquam voluptates dolore aut vero consequuntur.</p>
        </div>
        <div className='services-center'>
                <article className='service'>
                <span><MdEditLocation/></span>
                <h3>Mission</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                    rerum velit autem unde numquam nisi</p>
                </article>
                <article className='service'>
                    <span><MdTipsAndUpdates/></span>
                    <h3>Vision</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                        rerum velit autem unde numquam nisi</p>
                </article>
                <article className='service'>
                    <span><MdVrpano/></span>
                    <h3>History</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                        rerum velit autem unde numquam nisi</p>
                </article>
            </div>
        </div>
    </div>
  )
}

export default Services