import React from 'react'
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

const Search = () => {
    const {searchProducts,productInfo} = useGlobalContext();

    if(searchProducts.length === 0){
        return <div className='sorry'>Sorry, This Product Not Found</div>
    }
  return (
    <>
        {searchProducts.map((product)=> {
                  const {id,title,thumbnail,price} = product;
                  return (
                    <div key={id} className='product'>
                      <div className='image'>
                        <div className='ground'></div>
                        <Link to='/products/product'><MdSearch onClick={()=> productInfo(id)} /></Link>
                        <img src={thumbnail} alt={title} />
                      </div>
                      <div className='text'>
                        <h3>{title}</h3>
                        <h3 className='price'>${price}</h3>
                      </div>
                    </div>
                  )
                })}
    </>
  )
}

export default Search