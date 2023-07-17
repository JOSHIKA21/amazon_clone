import React from 'react'
import "./Login.css";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className='Login'>
            <Link to="/">
                <img src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.ssvg.png' className='LoginLogo' alt=""/>
            </Link>
            <div className='LoginContainer'>
                <h1>Sign In</h1>
                <form>
                    <h3>Email</h3>
                    <input type="email" placeholder="Your Email" required/>
                    <h3>Password</h3>
                    <input type='password' placeholder='Your Password' required/>
                    <button className='LoginButton'>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Condition of Use and Privacy Notice.</p>
                <button className='LoginButton'>Create Your Amazon Account</button>
            </div>
        </div>
    </>
  )
}

export default Login
