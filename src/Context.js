import axios from 'axios';
import React, { useState,useEffect, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    window.onload = ()=> {
        setFetchView('all');
        setProductLength(30)
    }
    
    const [fetchProduct,setFetchProduct] = useState([])
    const [filterProducts,setFilterProducts] = useState([])
    const [searchProducts,setSearchProducts] = useState([])
    const [rangeProducts,setRangeProducts] = useState([])
    const [productLength,setProductLength] = useState(fetchProduct.length)
    const [textRange,setTextRange] = useState()
    const [textSearch,setTextSearch] = useState('')
    const [fetchView,setFetchView] = useState('all')
    const [loginShow, setLoginShow] = useState(false)
    const [userName,setUserName] = useState('')
    const getLocalStorage = ()=> {
        let cart = localStorage.getItem('cart')
        if(cart){
            return(cart = JSON.parse(cart))
        }else{
            return [];
        }
    }
    const [cart,setCart] = useState(getLocalStorage())

    const [loading,setLoading] = useState(true)
    const [info,setInfo] = useState([])

    useEffect(()=> {
            axios.get('https://dummyjson.com/products').then(products => {
                setFetchProduct(products.data.products)
                setLoading(false)

            })
    },[])
    
    const filterItems = (x,e)=> {
        e.preventDefault()
        if(x === 'all'){
            setFilterProducts(fetchProduct)
            setProductLength(fetchProduct.length)
            setFetchView('all')
        }else {
            const newItems = fetchProduct.filter((item)=> item.category === x )
            setFilterProducts(newItems)
            setProductLength(newItems.length)
            setFetchView('filter')
        }
    }

    const searchItems = ()=> {
    const newItems = fetchProduct.filter((item)=> item.title.toLowerCase().includes(textSearch.toLowerCase()))
    setSearchProducts(newItems)
    setProductLength(newItems.length)
    setFetchView('search')
    }
    const rangeItems = ()=> {
    const newItems = fetchProduct.filter((item)=> item.price <= textRange )
    setRangeProducts(newItems)
    setProductLength(newItems.length)
    setFetchView('range')
}

    useEffect(() => {
        rangeItems()
    
  }, [textRange])
    useEffect(() => {
        searchItems()
    
  }, [textSearch])
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
    
  }, [cart])

    const productInfo = (id) => {
        const itemInfo = fetchProduct[id - 1]
        setInfo(itemInfo)
    }

    const addCart = (info,count) => {
        const { id,title,thumbnail,price } = info;
        const newCart = [...cart, {id:id,title:title,thumbnail:thumbnail,price:price,count:count}]
        setCart(newCart)
    }
    const deleteItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    return (
    <AppContext.Provider
        value={{
        loading,
        setLoading,
        filterItems,
        fetchProduct,
        setFetchProduct,
        filterProducts,
        searchProducts,
        rangeProducts,
        searchItems,
        setTextSearch,
        setTextRange,
        textRange,
        productInfo,
        fetchView,
        info,
        addCart,
        cart,
        setCart,
        deleteItem,
        productLength,
        userName,
        setUserName,
        loginShow,
        setLoginShow
        }}
    >
        {children}
    </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
