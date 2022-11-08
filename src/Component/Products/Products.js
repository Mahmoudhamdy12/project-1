import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context'
import Filter from '../SearchFilter/Filter'
import Search from '../SearchFilter/Search'
import Range from '../SearchFilter/Range'
import AllProducts from '../SearchFilter/AllProducts'


const Products = () => {
  const {fetchView,setTextSearch,setTextRange,textRange,filterItems,productLength} = useGlobalContext();
  const allCategory =['all', 'smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration']

  const switchRender = ()=> {
       switch (fetchView) {
                  case 'filter': return <Filter/>;               
                  case 'search' : return <Search/>;
                  case 'range' : return <Range/>;
                  default: return <AllProducts/>               
                }
  }

  return (
    <div className='products'>
        <h1 className='col'><Link className='col' to='/'>Home</Link> / Products</h1>
        <div className='container'>
          <div className='section-center'>
            <div className='option'>
              <div>
                <h3>Search For Your Product:</h3>
                <input type='search' placeholder='Search' onChange={(e)=> setTextSearch(e.target.value)}/>
                <form>
                  <div className='category'>
                    <h3>category:</h3>
                    {allCategory.map((x,index)=> {
                      return <button className='btn-shop' key={index} onClick= {(e) => filterItems(x,e)}>{x}</button>
                    })}
                  </div>
                </form>
                <label htmlFor='range' ><h3>Range :</h3></label>
                <input id='range' type='range' max='2000'  onChange={(e)=> setTextRange(e.target.value)}/>
                <h5>{textRange} $</h5>
              </div>
            </div>
            <div className='full-products'>
              <div className='products-menu'> Products Found {productLength}</div>
              <div className='all-products'>
                {switchRender()}
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Products