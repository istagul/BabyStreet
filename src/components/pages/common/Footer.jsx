import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import payment from "../../img/payment.png"

const Footer = () => {
  const {t}=useTranslation()
  return (
    <div className='footer'>
      <div className="color">
     
        
        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/02/footer-logo.png" alt="" />
            <div className="one">
            <ul>
                <li className='title' style={{fontWeight:"600"}}>
                {t("footer.0")}
                </li>
               <Link onClick={()=>{
                window.scrollTo(0,0)
               }} to="/aboutus" style={{textDecoration:"none"}}> <li> {t("footer.1")}</li></Link>
                <li> {t("footer.2")}</li>
                <li> {t("footer.3")}</li>
               <Link onClick={()=>{
                window.scrollTo(0,0)
               }} to="/blogs" style={{textDecoration:"none"}}><li>{t("footer.4")}</li></Link> 
            </ul>
            <ul>
                <li className='title' style={{fontWeight:"600"}}>
                {t("footer.5")}
                </li>
                <li>{t("footer.6")}</li>
                <li>{t("footer.7")}</li>
                <li>{t("footer.8")}</li>
                <li>{t("footer.9")}</li>
                <li>{t("footer.10")}</li>
                
            </ul>
            <ul>
                <li className='title' style={{fontWeight:"600"}}>
                {t("footer.11")}
                </li>
                <li> <i class="fa-solid fa-clock"></i>Mon. - Fri.: 09:00 - 18:30</li>
                <li><i class="fa-solid fa-location-dot"></i>164 7th Avenue, Seattle, WA 9801</li>
                <li><i class="fa-solid fa-phone"></i>+1.888.292.7171</li>
                <li><i class="fa-solid fa-envelope"></i>shop@baby.street</li>
                
            </ul>
     
     
      </div>
      <div className="two">
        <img src={payment} alt="" />
        <p>{t("footer.13")}</p>
      </div>
      </div>
        </div>
      
    
)}
  

export default Footer