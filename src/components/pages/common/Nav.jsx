import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import Lang from './Lang';
import Mode from './Mode';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const Nav=()=>{
  const { totalItems } = useCart();
  const wishlist = useSelector((state) => state.wishlist);
  const history=useNavigate();
  const getemail=localStorage.getItem("namedata")
  const LogoutClick =()=>{
    localStorage.clear();
    history("/")
  }
  const { t }=useTranslation();
  const loginbtn=()=>{
    if(getemail === null){
      return(
        <NavLink to="/login">
          <div className="login">
            <div className="border3">
            <a title='my account' style={{cursor:"pointer"}}>
     <i className="fa-regular fa-user" ></i></a>
     </div>
     </div>
           </NavLink> 
      )
    }
    else{
      return(
        <li className='dropdown'>
           <button
             class="btn btn-secondary dropdown-toggle"
             type="button"
             id="dropdownMenuButton1"
             data-bs-toggle="dropdown"
             aria-expanded="false"
            
          
           >
            {getemail}
          </button>
          
           <div className="dropdown-content" aria-labelledby="dropdownMenuButton">
           <a class="dropdown-item"  onClick={LogoutClick}>
              Logout
            </a>
           </div>
        </li>
      )
    }
  }
  return (
    <>
    <header >
         <div className="header-main">
         <ul className='links'>
            <li><Link to="/shop" style={{textDecoration:"none"}}> {t("header.0")}</Link></li>
            <li> <Link to="/shop" style={{textDecoration:"none"}}> {t("header.1")}</Link></li>
            <li> <Link to="/shop" style={{textDecoration:"none"}}> {t("header.2")}</Link></li>
        </ul>
        <div className="info">
        <p className='ccare'>{t("header.3")}</p>
        <p className='tel'>+1 555 179 472</p>
        </div>
        <div className="langmode me-3 ">
          <Lang/>
         <Mode />
        </div>
        </div>
     
    </header>
    <nav>
        <img src="https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222.png" alt="" />
        <ul className='nnav'>
        <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/" end>  <button className='home' style={{color:"#ff8087",border:"none"}}>
              {t("nav.0")}</button></NavLink>
            <li className='dropdown'>
              
              <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/shop?girls"><button className='dropbtn'> {t("nav.1")}</button></NavLink>
               
            </li>
            <li className='dropdown'>
           <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/blogs"> <button className='dropbtn'>{t("nav.2")}</button></NavLink>
            </li>
            <li className='dropdown'>
            <button className='dropbtn'>{t("nav.3")}</button>
               <div className="dropdown-content">
                <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/aboutus"> <p >{t("nav.4")}</p></NavLink> 
              <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/contact"><p>{t("nav.5")}</p></NavLink> 
               </div>
            </li>
        </ul>
        <div className="user">
        <div className="cart-holder2">
          
          {loginbtn()}
          
        </div>
        <div className="cart-holder">
            <div className="borderr">
            <div className="length">
            <span  className='total'>{wishlist.length}</span>
       <NavLink onClick={()=>{window.scrollTo(0,0)}}  to='/wishlist'> <i  className="fa-regular fa-heart"></i></NavLink> 
       </div>
        <div className="length">
          <span className='total'>{totalItems}</span>
      <NavLink onClick={()=>{window.scrollTo(0,0)}}  to="/cart"> <i  className="fa-solid fa-bag-shopping"></i></NavLink>
      </div>
       
       <NavLink onClick={()=>{window.scrollTo(0,0)}}  to="/search"><i  className="fa-solid fa-magnifying-glass"></i></NavLink> 
        </div>
        </div>
        </div>
       <div  className='btnnav' >

  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <i class="fa-solid fa-bars" style={{fontSize:"20px"}}></i>
  </button>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
    <div className="offcanvas-header">
    <img src="https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222.png" alt="" />
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav" >
        <li className="nav-item">
        <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/" end>  <button  className='home' style={{color:"#ff8087",border:"none",fontSize:"30px"}}>
              {t("nav.0")}</button></NavLink>
        </li>
        <li className="nav-item">
        <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/shop"><button style={{fontSize:"30px"}} className='dropbtn'> {t("nav.1")}</button></NavLink>
        </li>
        <li className="nav-item ">
        <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/blogs"> <button style={{fontSize:"30px"}} className='dropbtn'>{t("nav.2")}</button></NavLink>
        </li>
        <li className="nav-items ">
        <li className='dropdown'>
            <button className='dropbtn' style={{fontSize:"30px"}}>{t("nav.3")}</button>
               <div className="dropdown-content">
                <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/aboutus"> <p >{t("nav.4")}</p></NavLink> 
              <NavLink onClick={()=>{window.scrollTo(0,0)}} to="/contact"><p>{t("nav.5")}</p></NavLink> 
               </div>
            </li>
        </li>
      </ul>
    </div>
  </div>
</div>

    </nav>
   
    </>
  )
  }

export default Nav