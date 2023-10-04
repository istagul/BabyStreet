import React, { useState } from 'react'
import data3 from '../data/data3';
import ProductItem from './common/ProductItem';

const Search = () => {
    const [query, setQuery] = useState("");
  return (
    <>
    <div className="container " >
        <div className="row">
         <div className="search">
      <div className="my-3 text-center">
        <input
          type="text"
          placeholder="Search product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button  className='mt-3' onClick={()=>setQuery('')}>Clear</button>
      </div>
      </div>
      
          {data3.filter((u) => u.title.toLocaleLowerCase().includes(query))
            .map((item, i) => (
              <div className="product col-lg-4  col-12 col-sm-6 col-md-4" key={i} >
                <ProductItem   cartdata={item} id={item.id}/>
              </div>
            ))}
            
        </div>
      </div>
    </>
  )
}

export default Search