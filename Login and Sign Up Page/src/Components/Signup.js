import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../Assessts/Sign.css';
const Signup = ()=> {
    function change(e){
        e.preventDefault();
        toast.success('Registration Successfull!!')
    }
    return (
        <>
        <div className="Outer">
                <form onSubmit={change}> 
            <div className="Inner">
                <h3>Sign Up</h3>
                <input type='textfield' className='box1' placeholder='UserName' required></input>
                <input type='email' className='box1' placeholder='Email' required></input>
                <input type='password' className='box1' placeholder='Password' required></input>
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