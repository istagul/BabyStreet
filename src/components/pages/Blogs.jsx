import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import blogs from '../data/blogs'
import Blog from './common/Blog'
import { useTranslation } from 'react-i18next'

const Blogs = (id) => {
  const {t}=useTranslation()
  return (
    <>
      <div className='blogs'>
    <div className="back">
      <div className="color">
      <h1>{t("blog.0")}</h1>
      <p>{t("blog.1")}</p>
    </div>
    <div className="posts">
          <div className="line">
            <h1>Popular Posts</h1>
          </div>
        </div>
        </div>
        <div className="under">
          <div className="one">
          {
            blogs.map((fd)=>{
              return(
              
           <div className='post'>
                <img src={fd.pimg1} alt="" />
                <div className="info">
               <Link to={`/blogs/${id=fd.id}`} style={{textDecoration:"none"}}><h1>{fd.title}</h1></Link> 
                <h2>{fd.date}</h2>
                </div>
              </div>
            
         )
            })
          }
          </div>

          <div className="two ">
       {/* { blogs.map((fd,i)=>{
         return(
            <Blog pimg1={fd.pimg1} title={fd.title} date={fd.date} id={fd.id} key={i}/>
         )
        })
    } */}
     {blogs.map((fd)=>(

<Blog pimg1={fd.pimg1} title={fd.title} date={fd.date} id={fd.id}/>
))}
    
    </div>
    </div>
   </div>
    </>
  )
}

export default  Blogs;
