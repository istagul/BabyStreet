
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useTranslation } from "react-i18next";
import ProductItem from "./common/ProductItem";

const WishList = () => {

  const wishlist = useSelector((state) => state.wishlist);
  const { t } = useTranslation();
 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    
      {wishlist.length !==0 ? (
        <div className="shop-products">
          <div className="container">
           
            <div className="row">
            <h1 className="text-center my-5" >WISHLIST💗</h1>
              {wishlist?.map((item, index) => (
                <div
                  className="col-lg-4  col-12 col-sm-6 col-md-4 "
                  key={index}
                  data-aos="zoom-out-up"
                >
                  <ProductItem cartdata={item} id={item.id} />
                </div>
              ))}
           
            </div>
          </div>
        </div>
      ) : (
        <div className="cart d-flex justify-content-center align-items-center flex-column" style={{height:"500px"}}>
          <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />
        </div>
      )}
    </>
  );
};

export default WishList;
