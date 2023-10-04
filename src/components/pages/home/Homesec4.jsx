import React from 'react'
import collection2 from "../../img/collection2.jpg"
import "animate.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Homesec4 = () => {
  const {t}=useTranslation();
  return (
    <div className='homesec4'>
        <div className="partone">
            <h3>{t("home4.0")}</h3>
            <h1 className=" brand animate__animated animate__pulse">{t("home4.1")}</h1>
            <p>{t("home4.2")}</p>
           <div className="clbtn">
            <div className="dashline">
            <Link to="/shop" style={{textDecoration:"none"}}><p>{t("home4.3")}</p></Link>
            </div>
           </div>
        </div>
      <div className="colimg"></div>
    </div>
  )
}

export default Homesec4