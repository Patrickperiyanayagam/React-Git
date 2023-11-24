import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../Assessts/Login.css';
const Login =()=>{
    function change(e){
        e.preventDefault()
        toast.success('Login Successfull!!')
        console.log(name)
        console.log(password)
        axios.get(`http://localhost:3001/user?name=${name}&password=${password}`)
        .then(res=>{
            if(res.data.length>0){
                alert("Login successful")
            }
            else{
                alert("Invalid")
            }
        })
        .catch(err=>{console.log(err)})
    }
    const [name,setname] = useState('')
    const [password,setpassword] = useState('')
    
    return(
        <>
        <div className='division'>
            <form onSubmit={change}>
        <div className="div">
            <h1 className="Log"><b>Login</b></h1>
            <input type='textfield' placeholder='Username' className='un' value={name} onChange={(event)=>{setname(event.target.value)}}required></input>
            <input type='password' placeholder='Password' className='un' value={password} onChange={(event)=>{setpassword(event.target.value)}} required></input>
            <div className="remember">
            <label className="checkbox"><input type='checkbox'></input >Remember me</label>
            <a href=''>Forgot password?</a>
            </div>
            <button className="button"><b>Login</b></button>
            <div>
            <label>Don't have account?  </label><Link to='/signup'>
            <a href='' className='forgot'>  Register</a></Link>
            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
            </form>
        </div>
        </>
    )
}
export default Login;