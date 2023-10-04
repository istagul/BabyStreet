import React, { useState } from 'react'
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import WishListIcon from './WishListIcon';

const ProductItem = ({cartdata,id}) => {
    const [Hover, setHover] = useState(false);
   
    const mouseover= () => {
       setHover(true);
    };
 
    const mouseout = () => {
       setHover(false);
    };
    const { addItem } = useCart();
    
    
    const notify = () => toast("Add to card success!");
  return (
  
        <div className="box " style={{height:"18rem"}}>
            <div className='cartimg' style={{backgroundImage:Hover ? `url(${cartdata.img2}) ` : `url(${cartdata.img1})`}}  onMouseOver={mouseover} onMouseOut={mouseout}  >
               <div className="icons">
                <WishListIcon productItem={cartdata}/>
           <Link to={`/shop/${id}`} onClick={()=>{window.scrollTo(0,0)}} ><div className="icon"><i class="fa-solid fa-info"></i></div></Link> 
                 <button  onClick={() => notify(addItem(cartdata))} className="icon"><i class="fa-solid fa-bag-shopping"></i></button>
               </div> 
            </div>
            <h1>{cartdata.title}</h1>
            <h2>{cartdata.price}$</h2>
            </div>
    
  )
}

export default ProductItem