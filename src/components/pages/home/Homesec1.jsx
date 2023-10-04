import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from "aos";
import Wave from "react-wavify"
import "aos/dist/aos.css";
const Homesec1 = () => {
  const {t}=useTranslation()
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='homesec1'>
      <div className="color">
        <h1 data-aos="zoom-in-up">{t("home1.0")}</h1>
        <h2>{t("home1.1")}</h2>
        <div className="shop">
        <div className="girlbtn col-lg-12 d-flex justify-content-center">
          <div className="dashline1">
             <p>{t("home1.2")}</p>  
          </div>
        </div>
          <div className='boybtn'>
          <div className="dashline2 ">
            <p>{t("home1.3")}</p>
          </div>
          </div>
          
        
        </div>
        <div className="wave" style={{width:"100%",transform:"translateY:-100px"}}>
        <Wave 
      
      fill='#fff'
      paused={false}
      options={{
     height:50,
     amplitude:30,
     speed:0.70,
     points:4
      }}
      />
      </div>
        </div>
      
    </div>
  )
}

export default Homesec1