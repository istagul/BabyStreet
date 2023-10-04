import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const user={
    username:"istegul",
    password:"gul123"
}
const Login = () => {
const [name,setName]=useState("")
const [pass,setPass]=useState("")
const history=useNavigate()
const loginForm=(e)=>{
    e.preventDefault();
    if(!name || !pass){
        toast.warning('Please fill all the places')
    }
    else{
    if(name === user.username && pass === user.password){
        localStorage.setItem("namedata",user.username)
        localStorage.setItem("passworddata",user.password)
      history('/')
    }
    else{
        toast.warning("email or password is wrong!")
}

}}
  return (
    <div className="login">
        <h1 className='mt-5 text-center'>Login</h1>
<div className="d-flex align-item-center justify-content-center flex-cloumn">
  <form className='form ' onSubmit={loginForm}>
 <input onChange={(e)=>{setName(e.target.value)}} placeholder="Username" />
 <input type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Password" />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

</div>

  )
  }

export default Login;