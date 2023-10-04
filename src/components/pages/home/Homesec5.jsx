import React from 'react'
import { useTranslation } from 'react-i18next'

import blogdata from '../../data/blogdata'
import { Link } from 'react-router-dom'

const Homesec5 = (id) => {
  
  const {t}=useTranslation()
  return (
    <div className='blogsec'>
       <div className="partone">
            <h1>{t("home5.0")}</h1>
            <p>{t("home5.1")}</p>
        
        <div className="blogs">
            {blogdata.data1.map((fd)=>{
                return(
                    <div className="blog">
                      <div className="img" style={{backgroundImage:`url(${fd.img})`}}>
                         <div className="dashline"></div>
                      </div>
                      <Link onClick={()=>{window.scrollTo(0,0)}} to={`/blogs/${id=fd.id}`} style={{textDecoration:"none"}}>     <h1 > {fd.title}</h1></Link>
                       <div className="blogi">
                        <img src={fd.person} alt="" />
                        <h2>{fd.name}</h2>
                        <h2>{fd.time}</h2>
                       </div>
                      </div>
                )
            })}
            </div>
            
        </div>
        <div className="parttwo">
            <div className="color">
            <div className="text">
                <h1>{t("home5.2")}</h1>
                <p>{t("home5.3")}</p>
            </div>
            <div className="email">
                <input type="text" placeholder='Your email' />
                <button><div className="dashline"><h1>{t("home5.4")}</h1></div></button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Homesec5