import React from 'react'
import {Link } from 'react-router-dom';

const Blog = ({pimg1,title,date,id}) => {
  return (
   
   <>
       
     
    
      <div className="postt">
       <img src={pimg1} alt="" />
       <Link onClick={()=>{window.scrollTo(0,0)}} to={`/blogs/${id}`} style={{textDecoration:"none"}}><h1>{title}</h1></Link>
       <div className="pinfo">
        <div className="person">
        <img src="https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=60&d=mm&r=g" alt="" />
        <h2>Dimitar Koev</h2>
        </div>
        <div className="date">
        <i class="fa-regular fa-clock"></i>
        <h3>{date}</h3>
        </div>
       </div>
       <p>Applying The Kids Design Guide Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create...</p>
       <div className="btnn">
        <div className="linee">
        <Link onClick={()=>{window.scrollTo(0,0)}} to={`/blogs/${id}`} style={{textDecoration:"none"}}><h4>CONTINUE READING</h4></Link>
        </div>
       </div>
      </div>
    </>
   
    
  )
}

export default Blog;