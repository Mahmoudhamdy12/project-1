import React, { useRef, useState } from 'react'
import { AiFillStar,AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../Context';
import './Product.css'

const Product = () => {
    const [count,setCount] = useState(1);
    const {info,addCart,userName,setLoginShow} = useGlobalContext();
    const { title,thumbnail,price,images,stock
            ,brand,description,rating} = info;

    const img = useRef()
    const editImages = (x)=> {
      img.current.src = x
    }
  
  return (
    <div className='product-info'>
      <div className='container'>
      <button className='btn-shop'><Link to='/products' style={{color:'white'}}>BACK TO PRODUCTS</Link></button>
      <div className='product-center'>
        <div className='images'>
         <div>
          <img className='thumbnail' ref={img} src={thumbnail} alt={title}/>
         </div>
          <div className='img'>
            {images.map((x,index) => {
              return <img key={index} src={x} alt='images' onClick={()=> editImages(x)} />
            })}
          </div>
        </div>
        <div className='info'>
          <h1>{title}</h1>
          <h3>brand: {brand}</h3>
          <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/>{rating}</div>
          <p className='price'>${price}</p>
          <p>stock({stock})</p>
          <p>{description}</p>
          <div className='btn-center'>
            <button className='minus' onClick={()=> setCount(()=> count - 1)} disabled={count === 0}><AiOutlineMinus/></button>
            <p >{count}</p>
            <button className='plus' onClick={()=> setCount(()=> count + 1)}><AiOutlinePlus/></button>
          </div>
          <button className='btn-shop' onClick={()=> userName ? addCart(info,count) : setLoginShow(true)}>ADD TO CART</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Product