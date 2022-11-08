import Footer from './Component/Footer/Footer';
import Loading from './Component/Loading';
import Nav from './Component/Nav/Nav';
import Home from './Home/Home';
import About from './Component/About/About';
import Products from './Component/Products/Products';

import Product from './Component/Products/Product/Product';
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from './Context';
import Cart from './Component/Cart/Cart';
import Login from './Component/Products/Login/Login';


function App() {
  const {loading} = useGlobalContext();

// console.log(fetchProduct);
if(loading){
  return <Loading/>
}

    return (
        <div className='app'>
          <div>
            <Nav/>
            <Login/>
            <Routes>
            <Route path="/"  element={<Home/>} />              
            <Route path="/about"  element={<About/>} />              
            <Route path="/products"  element={<Products />} />              
            <Route path="/products/product"  element={<Product/>} />              
            <Route path="/cart"  element={<Cart/>} />              
            </Routes>
          <Footer/>
          </div>
        </div>
    )
}

export default App
