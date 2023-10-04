import React from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';
import data3 from '../data/data3';
import WishListIcon from './common/WishListIcon';

const Productdetails = () => {
    const {comingdata}=useParams();
    const detailitems =data3.find( p => p.id == comingdata)
    const { addItem } = useCart();
    const notify = () => toast("Add to card success!");
    const cartdata =detailitems;
  return (
 <div className="details">
    <div className="container details col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
   
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">{detailitems.title}</h1>
      <p className="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button onClick={() => notify(addItem(cartdata))} className="btn add btn-lg px-4 me-md-2">Add to cart</button>
        <WishListIcon productItem={cartdata} />
      </div>
    </div>
    <div className="col-10 col-sm-8 col-lg-6">
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img style={{objectFit:"cover"}} src={detailitems.img1}  />
    </div>
    <div className="carousel-item ">
      <img src={detailitems.img2} alt="..." />
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  </div>
  <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
</div>
</div>
)
}

export default Productdetails