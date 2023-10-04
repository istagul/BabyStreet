import React from 'react'
import { useTranslation } from 'react-i18next'
import {  Link } from 'react-router-dom'

const About = () => {
  const {t}=useTranslation();
  return (
    <div className='about'>
      
      <div className="top">
        <div className="color">
        <div className="link">
            <Link onClick={()=>{window.scrollTo(0,0)}} to="/" style={{textDecoration:"none"}}><h2>{t("about.0")}</h2></Link>
            <h2 >/{t("about.1")}</h2>
        </div>
        <h1>{t("about.1")}</h1>
        </div>
      </div>
      <div className="mission">
        <img src="https://babystreet.althemist.com/wp-content/uploads/2018/06/bs-blog-1-650x450.jpg" alt="" />
        <div className="text">
            <h1>{t("about.2")}</h1>
            <p>{t("about.3")}</p>
            <img src="https://babystreet.althemist.com/wp-content/uploads/2019/02/signature-160x63.png" alt="" />
        </div>
      </div>
      <div className="cards">
        <div className="color">
        <div className="card">
            <div className="linee">
            <img src="https://babystreet.althemist.com/wp-content/uploads/2019/02/boys-shirts-60x60.jpg" alt="" />
            <h1>{t("about.4")}</h1>
            <p> {t("about.5")}</p>
            </div>
        </div>
        <div className="card">
            <div className="linee">
            <img src="https://babystreet.althemist.com/wp-content/uploads/2019/02/boys-jumpsuits-60x60.jpg" alt="" />
            <h1>{t("about.6")}</h1>
            <p>{t("about.5")}</p>
            </div>
        </div>
        <div className="card">
            <div className="linee">
            <img src="https://babystreet.althemist.com/wp-content/uploads/2019/02/boys-jeans-60x60.jpg" alt="" />
            <h1>{t("about.7")}</h1>
            <p>{t("about.5")}</p>
            </div>
        </div>
        </div>
      </div>
      <div className="Philos">
        <div className="text">
            <h1>{t("about.8")}</h1>
            <p>{t("about.9")}</p>
<div className="sbtn">
    <div className="line">
        <h1>{t("about.10")}</h1>
    </div>
</div>
        </div>
        <img src="https://babystreet.althemist.com/wp-content/uploads/2018/06/bs-blog-3-650x450.jpg" alt="" />
      </div>

    </div>
  )
}

export default About