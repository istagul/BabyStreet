import React from 'react'
import homesec3 from '../../data/data2'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import ProductItem from '../common/ProductItem'
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
const Homesec3 = () => {
  const {t}=useTranslation();
  const options = {
    margin: 40,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    items: 3,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  
  return (
    <>
    <div className="textt">
    <h1>{t("home3.0")}</h1>

    <p>{t("home3.1")}</p>
</div>
    <div className="homesec3">
 <OwlCarousel className="slider-items owl-carousel" {...options}>
    {homesec3.data1.map((fd,i)=>{
      return(
        <ProductItem  key={i} cartdata={fd} id={fd.id}/>
      )
    })}
    </OwlCarousel>
    </div>
    <div className='shopbtn'>
         <div className="dashline">
        <Link to="/shop" onClick={()=>{window.scrollTo(0,0)}}   style={{textDecoration:"none"}}><p>Shop All Products</p></Link>  
         </div>
    </div>
    </>
  )
}

export default Homesec3
