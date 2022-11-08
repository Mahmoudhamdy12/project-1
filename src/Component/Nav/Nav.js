import React, { useState,useRef  } from 'react'
import { MdLogin,MdShoppingCart,MdReorder,MdHighlightOff, MdLogout } from "react-icons/md";
import {Link } from "react-router-dom";
import { useGlobalContext } from '../../Context';
import './Nav.css'

const Nav = () => {
  const [click,setClick] = useState(false)
  const {cart,setCart,userName,setLoginShow} = useGlobalContext()
  const Logout = ()=> {
    window.location.reload(false)
    setCart([])
  }
  const menu = useRef();
  const handelClick = ()=> {
    setClick(!click)
    if(click){
      menu.current.style.left = '-100%'
    }else if(!click){
      menu.current.style.left = '0px'
    }

  }
  return (
    <header className='header'>
            <div className='container'>
              <div ><Link to='/' className='logo'>Online Store</Link></div>
              <div className='options' onClick={handelClick}>
                {click ? <MdHighlightOff/> : <MdReorder/>}
              </div>
              <div className='menu' ref={menu}>
              <ul className='links' >
                <li onClick={handelClick}><Link to='/'>Home</Link></li>
                <li onClick={handelClick}><Link to='/about'>About</Link></li>
                <li onClick={handelClick}><Link to='/products'>Products</Link></li>
              </ul>
              <div className='cart' >
                <div className='btn-cart' onClick={handelClick}><Link to='cart'>Cart
                <span className='cart-icon'><MdShoppingCart/>
                <span className='cart-value'>{cart.length}</span></span></Link>
              </div>
                <button className='btn-login' onClick={()=> userName ? '' : setLoginShow(true)}>
                  {userName ? userName : 'login'}
                  <span onClick={()=> userName ? Logout() : null } className='login-icon'>
                  { userName ? <MdLogout/> : <MdLogin/> }</span>
                </button>
              </div>
              </div>
            </div>
          </header>
  )
}

export default Nav