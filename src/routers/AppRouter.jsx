import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from 'react-use-cart'
import About from '../components/pages/About'
import Ablog from '../components/pages/blog/Ablog'

import Blogs from '../components/pages/Blogs'

import Cart from '../components/pages/Cart'
import Footer from '../components/pages/common/Footer'
import Nav from '../components/pages/common/Nav'
import Contact from '../components/pages/Contact'
import Home from "../components/pages/Home"
import Login from '../components/pages/Login'
import Productdetails from '../components/pages/Productdetails'
import Search from '../components/pages/Search'
import Shop from '../components/pages/Shop'
import Wishlist from '../components/pages/Wishlist'
import { useSelector } from 'react-redux'




const AppRouter = () => {
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    localStorage.setItem("Wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  return (
   <BrowserRouter>
  
   <CartProvider>
   <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          /> 
   <Nav/>
   <Routes>
   <Route path="/" element={<Home />}></Route>
   <Route path='/cart' element={<Cart/>}></Route>
   <Route path='/blogs' element={<Blogs/>}></Route>
   <Route path='/blogs/:comingdata' element={<Ablog/>}></Route>
   <Route path='/aboutus' element={<About/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/shop' element={<Shop/>}></Route>
   <Route path='/shop/:comingdata' element={<Productdetails/>}></Route>
   <Route path='/search' element={<Search/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/wishlist' element={<Wishlist/>}></Route>
 
   </Routes>
   <Footer/>
   </CartProvider>
  
   </BrowserRouter>
  )
}

export default AppRouter;