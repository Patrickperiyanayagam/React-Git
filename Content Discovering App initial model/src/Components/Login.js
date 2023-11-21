import TextField from '@mui/material/TextField';
import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import '../Assessts/Login.css';
const Login =()=>{
    function change(prevent){
        toast.success('Login Successfull!',{duration:3000});
        prevent.preventDefault();
        content();
    }
    const link1 = useNavigate();
    function content(){
        link1('/Home');
    }
    return(
        <>
        <div className='login_body'>
        <div style={{display:'flex'}}>
            <form onSubmit={change}>
            <div className="login_div">
                <h1 className="login_Log"><b>Login</b></h1>
                <TextField id="outlined-basic" label="Username" variant="outlined" className='login_un' sx={{marginBottom:'30px',borderRadius:'10px'}} required/>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" className='login_un' sx={{marginBottom:'30px',borderRadius:'10px'}} required/>
                    <div className="login_remember">
                        <label className="login_checkbox"><input type='checkbox'></input>Remember me</label>
                        <a href='#' className='login_forgot'>Forgot password?</a>
                    </div>
                {/* <Button variant="contained"  className='button' disableElevation sx={{marginBottom:'20px',backgroundColor:'black','&:hover':{backgroundColor:'black'}}}>Login</Button> */}
                <button className='login_button'>Login</button>
                    <div>
                        <label className='login_dont'>Don't have account? </label>
                        <Link to='/SignUp'><a href='#' className='login_forgot'>Signup</a></Link>
                    </div>
            </div>  
            </form>
            <div style={{marginTop:'50px',marginBottom:'80px',height:'50vh'}}><b style={{fontSize:'40px',color:'#373737'}}>Unlock tailored wonders<br></br>log in for your exclusive experience.</b><br></br><br></br><br></br>
                <div className='login_welcome'>
                    <h1 style={{fontSize:'40px',color:'#373737'}}>Welcome back!</h1>
                </div>
            </div>
        </div>
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </>
    )
}
export default Login;