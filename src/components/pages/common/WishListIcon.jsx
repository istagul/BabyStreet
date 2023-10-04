import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addWishList from "../../../store/actions/AddWishList";



const WishListIcon = ({ productItem }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <button className=" icon2" onClick={() => addWishList(productItem, wishlist, dispatch)}>
     
      {wishlist.find((selectedProduct) => selectedProduct.id === productItem.id) ? (
         <i class="fa-solid fa-heart-crack"></i>
        
      ) : (
        //  <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-heart"></i>
      )}
      
    </button>
  );
};

export default WishListIcon;