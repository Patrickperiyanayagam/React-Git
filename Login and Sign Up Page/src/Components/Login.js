import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../Assessts/Login.css';
const Login =()=>{
    function change(e){
        e.preventDefault()
        toast.success('Login Successfull!!')
    }
    
    return(
        <>
        <div className='division'>
            <form onSubmit={change}>
        <div className="div">
            <h1 className="Log"><b>Login</b></h1>
            <input type='textfield' placeholder='Username' className='un' required></input>
            <input type='password' placeholder='Password' className='un' required></input>
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