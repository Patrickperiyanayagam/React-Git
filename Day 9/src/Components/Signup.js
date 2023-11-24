import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../Assessts/Sign.css';
const Signup = ()=> {
    const [name,setname] = useState('')
    const [password,setpassword] = useState('')
    const [email,setemail] = useState('')
    function change(e){
        e.preventDefault();
        toast.success('Registration Successfull!!')
        console.log(name)
        console.log(password)
        console.log(email)
        axios.post(' http://localhost:3001/user',{name,password,email})
        .then(res=>alert("signup successfull"))
        .catch(err=>console.log(err));
    }
    
    return (
        <>
        <div className="Outer">
                <form onSubmit={change}> 
            <div className="Inner">
                <h3>Sign Up</h3>
                <input type='textfield' className='box1' placeholder='UserName' value={name} onChange={(event)=>{setname(event.target.value)}} required></input>
                <input type='email' className='box1' placeholder='Email' value={email} onChange={(event)=>{setemail(event.target.value)}} required></input>
                <input type='password' className='box1' placeholder='Password' value={password} onChange={(event)=>{setpassword(event.target.value)}} required></input>
                <label><input type="checkbox"></input> I read and agree to <span>Terms and Conditions</span></label>
                <button className='box2'>Create Account</button>
                <label>Already Have an Account? <span><Link to='/'><a href=''className='forgot'> sign in</a></Link></span></label>
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
export default Signup;