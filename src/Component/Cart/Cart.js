import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context';
import './Cart.css'

const Cart = () => {
    const {cart,setCart,deleteItem} = useGlobalContext();
    if(cart.length === 0 ){
        return <div className='empty'>
            <h1>Your cart is empty</h1>
            <button className='btn-shop'><Link className='col' to='/products'>Shop Now</Link></button>
        </div>
    }
    return (
    <div className='carts'>
        <h1 className='col'><Link className='col' to='/'>Home</Link> / Cart</h1>
        <div className='container'>
            <table className='items'>
                <thead>
                    <tr className='content'>
                    <th>Item</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Delate</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((item) => {
                    const {id,title,count,thumbnail,price} = item;
                    return (
                        <tr className='cartItem' key={id}>
                            <td className='text'>
                                <img className='thumbnail' src={thumbnail} alt={title}/>
                                <h5>{title}</h5>
                            </td>
                            <td>${price}</td>
                            <td>{count}</td>
                            <td>${price * count}</td>
                            <td><button className='btn-delete' onClick={()=> deleteItem(id)}><AiFillDelete/></button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className='btn'>
                <button className='btn-shop'><Link className='col' to='/products'>Shop Now</Link></button>
                <button className='btn-clear' onClick={()=> setCart([])}>Clear Shopping Cart</button>
            </div>
            <section className='order-total'>
                <h5>Subtotal : $247.92</h5>
                <p>Shipping Fee : ${5.34}</p>
                <hr/>
                <h3>Order Total : $253.26</h3>
            </section>
            </div>
        </div>
    )
}

export default Cart