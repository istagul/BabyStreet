import React, { useEffect, useState } from 'react'

const Mode = () => {
    const [mode,setMode]=useState(localStorage.getItem('mode'))
    useEffect(()=>{
        document.body.className=mode;
        localStorage.setItem('mode',mode)
      },[mode])
    const modeclick=()=>{
        setMode(mode === "light" ? "dark": "light")
    };
  return (
    <div>
          <button className='modebtn' onClick={modeclick} >
            {mode === "light" ? "🌙" : "🌞" }
          </button>
    </div>
  )
}

export default Mode