import React from 'react'
import { useParams } from 'react-router-dom'

import blogs from '../../data/blogs';


const Ablog = () => {
    const {comingdata}=useParams();
    const detailsblog =blogs.find( p => p.id == comingdata)
  return (
    
    <div className='ablog'>
    <div className="title">
        <div className="color">
        <h1>{detailsblog.title}</h1>
        <div className="pinfo">
            <img src="https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=60&d=mm&r=g" alt="" />
            <h2> Dimitar Koev</h2>
            <i class="fa-solid fa-clock"></i>
            <h3>{detailsblog.title}</h3>
            </div>
        </div>
    </div>
    <div className="blogg">
    <img className='img1' src={detailsblog.pimg1}/>
    <div className="text">
        <div className="one">
            <h1>Applying The Kids Design Guide</h1>
            <p>Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create high demand for specific items or brands, new “buy now button” technology can link these styles with direct sales.
<br></br>
Machine vision technology has been developed to track how fashions spread through society. The industry can now see the direct correlation on how fashion shows influence street-chic outfits. The effects can now be quantified and provide valuable feedback to fashion houses, designers and consumers regarding trends.</p>
        </div>
        <div className="two">
            <div className="partone">
                <h1>It’s a Process</h1>
                <p>Machine vision technology has been developed to track how fashions spread through society. The industry can now see the direct correlation on how fashion shows influence street-chic outfits. The effects can be quantified.</p>
            </div>
            <div className="parttwo">
                <h1>And It Takes Time</h1>
                <p>Machine vision technology has been developed to track how fashions spread through society. The industry can now see the direct correlation on how fashion shows influence street-chic outfits. The effects can be quantified.</p>
            </div>
        </div>
        <div className="three">
            <img className='img2' src="https://babystreet.althemist.com/wp-content/uploads/2019/01/prod-desc-pic2.jpg" alt="" />
            <img className='img2' src= "https://babystreet.althemist.com/wp-content/uploads/2019/01/prod-desc-pic3.jpg" alt="" />
        </div>
        <div className="four">
            <h1>The End Result Was Absolutely Amazing</h1>
            <p>As we undergo a global economic downturn, the “Spend now, think later” belief is getting less relevant in our society. Today’s consumer tends to be more mindful about consumption, looking for just enough and better, more durable options. People have also become more conscious of the impact their everyday consumption has on the environment and society. They’re looking for ways to mediate their material desires with an aim to do more good in the world. A linear economy is slowly shifting to a circular one.<br></br>

Consumption as a share of gross domestic product in China has fallen for six decades, from 76 percent in 1952 to 28 percent in 2011. China plans to reduce tariffs on a number of consumer goods and expand its 72-hour transit visa plan to more cities in an effort to stimulate domestic consumption.</p>
        </div>
        <div className="author">
            <img src="https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=160&d=mm&r=g" alt="" />
            <div className="ainfo">
                <h3>Dimitar Koev</h3>
                <p>Althemist is an international web design and development agency and independent Envato Elite author producing best quality WordPress themes with strong accent on e-commerce. We invest our knowledge and 10+ years experience to ensure the WordPress themes we develop serve the right purpose, boosting your brand and making your every-day work easier so you could concentrate on your main business.</p>
            </div>
        </div>
      
    </div>
    <div className="form">
            <h2>LEAVE A REPLY</h2>
            <div className="formm">
                <h2>COMMENT </h2>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="formm">
                <h2>NAME</h2>
                <input type="text" />
            </div>
            <div className="formm">
                <h2>EMAIL</h2>
                <input className='email' type="text" />
            </div>
            <div className="fbtn">
                <div className="line">
                    <h2>POST COMMENT</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Ablog