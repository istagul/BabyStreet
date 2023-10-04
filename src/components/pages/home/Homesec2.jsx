import React from 'react'
import homesec2 from '../../data/data1'

const Homesec2 = () => {
  
  return (
    <div className='homesec2'> 
 <div className="container">
            <div className="row">
            
    {homesec2.data1.map((fd,i)=>{
        return(
          <div className="carts col-12 col-sm-6 col-md-4  d-flex justify-content-center ">
       <div className="cart   "  style={{backgroundImage:`url(${fd.img})`}} key={i}>
        <div className="dashline">
            
            <div className="text" >
                <h1>{fd.name}</h1>
                <h2>{fd.desc}</h2>
            </div>
        </div>
     </div>
     </div>
    )}
    )}
    </div>
   
     </div>
    </div>
    
  )
}

export default Homesec2