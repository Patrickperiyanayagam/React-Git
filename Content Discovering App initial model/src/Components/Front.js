import { Ticket } from 'lucide-react';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Assessts/Front.css';
function Front() {
  return (
    <>
    <div className='front_body'>
    <div className='front_navbar'>
    <Ticket className='front_ticket'/>
      <p className='front_explore'>Explore</p>
      <a href='/' className='front_signup'>Signup</a>
      <a href='/' className='front_save'>How to save</a>
      <a href='/' className='front_support'>Support</a>
      <Link to='/Login'><button className='front_login'><b>Log in</b></button></Link>
      </div>
      <div className='front_intro'>
            <div className='front_logdiv'>
                <div className='front_logdivinner'>
                    <p><b>Where Ideas Meet Impact: Your Story, Your App</b></p>
                    <h1 style={{fontSize:'40px'}}><b>Get right to <br></br>the good stuff</b></h1><br/>
                    <p>Craft meaningful connections, spark conversations,<br></br> and make your mark in the digital world with our content creation app.</p>
                    <Link to='/SignUp'><button className='front_signupbutton'>Sign up</button></Link>
                </div>
            </div>
            <div className='front_logdiv2'>
              <div className='front_wallcol1'>
                <div className='front_photo1'><div className='front_photo1inner'></div><b>Know abt food!</b></div>
                <div className='front_photo2'><div className='front_photo2inner'></div><b>Know abt Culture!</b></div>
                <div className='front_photo3'><div className='front_photo3inner'></div><b></b></div>
              </div>
              <div className='front_wallcol2'>
                <div className='front_photo4'><div className='front_photo4inner'></div><b>Know abt Tech!</b></div>
                <div className='front_photo5'><div className='front_photo5inner'></div><b>Know abt stocks!</b></div>
                <div className='front_photo6'><div className='front_photo6inner'></div><b></b></div>
              </div>
              <div className='front_wallcol3'>
                <div className='front_photo7'><div className='front_photo7inner'></div><b>Know abt sci!</b></div>
                <div className='front_photo8'><div className='front_photo8inner'></div><b>Know abt Space!</b></div>
                <div className='front_photo9'><div className='front_photo9inner'></div><b></b></div>
              </div>
            </div>
      </div>
      <div className='front_intro2'>
            <div className='front_intro2div1'><div className='front_intro2div1inner'></div></div>
            <div className='front_intro2div2'><div className='front_intro2div2inner'><b style={{fontSize:'40px'}}>Discover your interests✏</b><br></br><br></br>Uncover the extraordinary in the ordinary as you dive into the ocean of content discovery—where curiosity meets revelation, and every scroll reveals a new chapter of captivating narratives</div></div>
            
      </div>
      <div className='front_intro3'>
            <div className='front_intro3div1'><div className='front_intro3div1inner'><b style={{fontSize:'40px'}}>Customize  your feed to your liking</b><br></br><br></br>Elevate your social experience with a touch of individuality—tailor your feed to reflect the unique mosaic of your life. Unleash the power of customization and watch your social world come alive like never before.</div></div>
            <div className='front_intro3div2'><div className='front_intro3div2inner'></div></div>
            
      </div>
      <div className='front_endsignup'>
        <div style={{justifyContent:'center',alignItems:'center'}}>
        <p><b style={{fontSize:'40px'}}>Elevate your experience, sign up now.</b></p>
        <Link to='/SignUp'><button className='front_endsignupbutton'><b>Sign up</b></button></Link>
        </div>
      </div>
      <div className='front_homeend'>
        <div>
            <a href='/' style={{paddingLeft:'300px'}} className='front_blog'>Blog</a>
            <a href='/' style={{paddingLeft:'50px'}} className='front_blog'>Explore</a>
            <a href='/' style={{paddingLeft:'50px'}} className='front_blog'>Publishers</a>
            <a href='/' style={{paddingLeft:'50px'}} className='front_blog'>Developers</a>
            <a href='/' style={{paddingLeft:'50px'}} className='front_blog'>Privacy Policy</a>
            <a href='/' style={{paddingLeft:'50px'}} className='front_blog'>Terms of Service</a>
            <a href='/' style={{paddingLeft:'50px'}} className='front_blog'>Jobs</a>
            <a href='/' style={{paddingLeft:'50px'}} className='front_blog'>Cookies</a>
        </div>
      </div>
      </div>
      </>
  )
}

export default Front