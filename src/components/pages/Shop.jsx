import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import data3 from '../data/data3'
import ProductItem from './common/ProductItem'


const Shop = () => {
    const [data,setData]=useState(data3);
    const [style,setStyle]=useState("shop")
    const filterResult=(comingData)=>{
        const result = data3.filter((fdata)=>{
           return fdata.catagory1 === comingData;
         });
        setData(result);
        setStyle("shop2")
    };
    const filterResult2=(comingData)=>{
        const result2 = data3.filter((fdata)=>{
           return fdata.catagory2 === comingData;
         });
        setData(result2);
        setStyle("shop2")
    }
    const filterResult3=(comingData)=>{
        const result3 = data3.filter((fdata)=>{
           return fdata.catagory3 === comingData;
         });
        setData(result3);
        setStyle("shop2")
    }

   
  
   
  
   const {t}=useTranslation();
  return (
    <div className={style}>
         <div className="top">
            <div className="color">
        <div className="link">
            <Link to="/" style={{textDecoration:"none"}}> <h2>{t("shop.0")}</h2></Link>
            <h2>/{t("shop.1")}</h2>
        </div>
        <h1>{t("shop.2")}</h1>
        <p>{t("shop.3")}</p>
        </div>
      </div>
      <div className="clothes">
      <div className="left">
        
            <div className='ct'>
                <div className="line">
                    <h1 >{t("shop.4")}</h1>
                </div>
            
            </div>

            <ul >
                <li className='element'>
                    <h1 onClick={()=>{filterResult('boys')}} >- {t("shop.5")}</h1>
                    <div className="round">
                        <h2>7</h2>
                    </div>
                </li>
                <ul>
                    <li >
                        <h1 onClick={()=>{filterResult2("jeans")}} >-  {t("shop.6")}</h1>
                        <div className="round">
                            <h2>2</h2>
                        </div>
                    </li>
                    <li >
                        <h1 onClick={()=>{filterResult2("Sweaters")}}>- {t("shop.7")}</h1>
                        <div className="round">
                            <h2>1</h2>
                        </div>
                    </li>
                    <li >
                        <h1 onClick={()=>{filterResult2('Tops & Shirts')}}>-  {t("shop.8")}</h1>
                        <div className="round">
                            <h2>3</h2>
                        </div>
                    </li>
                    <li>
                        <h1 onClick={()=>{filterResult2('jeans');filterResult3("Rompers & Jumpsuits")}}>-   {t("shop.9")}</h1>
                        <div className="round">
                            <h2>3</h2>
                        </div>
                    </li>
                </ul>
            </ul>
            <ul >
                <li className='element'>
                    <h1 onClick={()=>{filterResult('girls')}}>-  {t("shop.10")}</h1>
                    <div className="round">
                        <h2>6</h2>
                    </div>
                </li>
                <ul>
                    <li >
                        <h1 onClick={()=>{filterResult2('Blouses')}}>- {t("shop.11")}</h1>
                        <div className="round">
                            <h2>3</h2>
                        </div>
                    </li>
                    <li >
                        <h1 onClick={()=>{filterResult2('Dresses & Skirts')}}>-{t("shop.12")}</h1>
                        <div className="round">
                            <h2>2</h2>
                        </div>
                    </li>
                    <li >
                        <h1 onClick={()=>{filterResult3('Leggings')}}>- {t("shop.13")}</h1>
                        <div className="round">
                            <h2>1</h2>
                        </div>
                    </li>
                    <li >
                        <h1 onClick={()=>{filterResult2('T-shirts');filterResult3('T-shirts')}}>- {t("shop.23")}</h1>
                        <div className="round">
                            <h2>4</h2>
                        </div>
                    </li>
                </ul>
            </ul>
            <ul>
                <li className='element'>
                    <h1 onClick={()=>{filterResult('Shoes & Accessories')}}>- {t("shop.14")}</h1>
                    <div className="round">
                        <h2>3</h2>
                    </div>
                </li>
            </ul>
            <ul>
                <li className='element'>
                    <h1 onClick={()=>{filterResult('Toys & Games')}}>-{t("shop.15")} </h1>
                    <div className="round">
                        <h2>11</h2>
                    </div>
                </li>
            </ul>
        
      </div>
      <div className="right">
        
        <div className="carts">
            
            <div className="onee">
         <div onClick={()=>{filterResult('girls')}} className="one " >
            <div className="color ">
                <div className="line">
                    <div className="text">
                    <h1>{t("shop.16")}</h1>
                    <h2>{t("shop.17")}(6)</h2>
                    </div>
                </div>
            </div>
         </div>
         <div onClick={()=>{filterResult("boys")}} className="two " >
         <div className="color">
                <div className="line">
                    <div className="text">
                    <h1>{t("shop.18")}</h1>
                    <h2>{t("shop.17")}(7)</h2>
                    </div>
                </div>
            </div>
         </div>
         </div>
         <div className="twoo">
         <div className="three   "onClick={()=>{filterResult("Shoes & Accessories")}} >
         <div className="color">
                <div className="line">
                    <div className="text">
                    <h1>{t("shop.19")}</h1>
                    <h2>{t("shop.20")}(3)</h2>
                    </div>
                </div>
            </div>
         </div>
         <div className="four  " onClick={()=>{filterResult("Toys & Games")}}>
         <div className="color">
                <div className="line">
                    <div className="text">
                    <h1>{t("shop.21")}</h1>
                    <h2>{t("shop.22")}(11)</h2>
                    </div>
                </div>
          
            </div>
         </div>
         </div>
        </div>
        <div className="items ">
            {data.map((fd,i)=>(
                <div className="product col-lg-4  col-12 col-sm-6 col-md-4 " key={i} > <ProductItem img1={fd.img1} img2={fd.img2} title={fd.title} price={fd.price} key={i} cartdata={fd} id={fd.id}  /></div>
            ))}
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Shop