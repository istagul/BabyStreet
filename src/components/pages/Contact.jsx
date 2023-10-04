import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Contact = () => {
    const {t}=useTranslation();
  return (
    <div className='contact'>
         <div className="top">
            <div className="color">
        <div className="link">
            <Link to="/" style={{textDecoration:"none"}}><h2>{t("contact.0")}</h2></Link>
            <h2>/{t("contact.1")}</h2>
        </div>
        <h1>{t("contact.1")}</h1>
        </div>
      </div>
      <div className="question">
        <h1>{t("contact.2")}</h1>
        <p>{t("contact.3")}</p>
      </div>
      <div className="form">
        <div className="one">
        <h4>{t("contact.4")}</h4>
        <form >
            <div className="fr">
                <h1>{t("contact.5")}:</h1>
                <input type="text" />
            </div>
            <div className="fr">
            <h1>{t("contact.6")}:</h1>
                <input type="text" />
            </div>
            <div className="fr">
            <h1>{t("contact.7")}:</h1>
                <input type="text" />
            </div>
            <div className="fr">
            <h1>{t("contact.8")}:</h1>
                <input type="text" />
            </div>
            <div className="fr">
            <h1>{t("contact.9")}:</h1>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="frbtn">
                <div className="line">
                    <h1>{t("contact.10")}</h1>
                </div>
            </div>
        </form>
        </div>
        <div className="two">
            <h4>{t("contact.15")}</h4>
            <div className='street'>
                <div className="adres">
                <h1>BabyStreet Trading LTD</h1>
                <p>164 7th Avenue,
Seattle, WA 9801</p>
</div>
            </div>
            <div className="Inquiries">
                <div className="tr">
               <h1>{t("contact.11")}</h1>
               <p>{t("contact.12")}</p>
               </div>
            </div>
            <div className="brand">
            <h1>{t("contact.13")}</h1>
            <p>{t("contact.14")}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact