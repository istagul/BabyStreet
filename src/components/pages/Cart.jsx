import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {t} =useTranslation();
    const {
        isEmpty,
        totalUniqueItems,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();
      const getemail=localStorage.getItem("namedata")
      const history=useNavigate();
      if(isEmpty){
        return(
            <div className='d-flex align-items-center justify-content-center my-5'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="" />
            </div>
        )
      }
     const Buyclick =()=>{
      if(getemail === null){
        toast.warning('please login to your account')
        history("/login")
      }
     else{
      toast.warning('shopping completed')
     emptyCart()
     }
     }
  return (
    <div className='container'>
        <div className="col-12 my-5">
 <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{t("cart.0")}</th>
      <th scope="col">{t("cart.1")}</th>
      <th scope="col">{t("cart.2")}</th>
      <th scope="col">{t("cart.3")}</th>
      <th scope="col">{t("cart.4")}</th>
    </tr>
  </thead>
  <tbody>
    {items.map((fd,i)=>{
        return <tr key={i}>
      <th scope="row">{i+1}</th>
      <td><img width={200} src={fd.img1} alt={fd.title} /></td>
      <td>{fd.title}</td>
      <td>{fd.price.toFixed()*fd.quantity}$</td>
      <td>
      <button className='button' onClick={()=>{updateItemQuantity(fd.id,fd.quantity-1)}}>-</button>
  <span  className='mx-2'>{fd.quantity}</span>
  <button className='button' onClick={()=>{updateItemQuantity(fd.id,fd.quantity+1)}}>+</button>
      </td>
      <td> <td><button style={{backgroundColor:"#FF8087",border:"none"}} className='btn btn-danger' onClick={()=>{removeItem(fd.id)}}>{t("cart.5")}</button></td></td>
      
    </tr>
        
    })
    }
   
  </tbody>
</table>
<p style={{fontSize:25}}>{t("cart.6")}: {cartTotal.toFixed()}$</p>
<button className="btn btn-success" onClick={Buyclick} style={{backgroundColor:"#53bdd8",border:"none"}}>Buy Now</button>
</div>
    </div>
  )
}

export default Cart