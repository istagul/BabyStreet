import React from 'react'
import { useTranslation } from 'react-i18next'
import "../../../i18n/i18next"

const Lang = () => {
    const {i18n}=useTranslation()
    const handleClick=(lang)=>{
     i18n.changeLanguage(lang)
    }
  return (
    <div className='d-flex'>
        <button className='langbtn' onClick={()=>{handleClick("es")}}>ES</button>
        <button className='langbtn' onClick={()=>{handleClick("en")}}>EN</button>
    </div>
  )
}

export default Lang