import React from 'react'
import {Link} from "react-router-dom";
import './Profile.css';
const Profile = () => {
  return (
    <div>
        <div className='Profile'>
            <Link to="/">
                <img src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.ssvg.png' className='LoginLogo' alt=""/>
            </Link>
            <div className='ProfileContainer'>
                <h1>Your Profile</h1>
                <form>
                    <h3>Name</h3>
                    <input type='text' placeholder="Enter your name" required/>
                    <h3>Email</h3>
                    <input type='email' placeholder='Enter your email' required/>
                    <h3>Mobile</h3>
                    <input type="number" placeholder='Enter your number' required/>
                    <button className='ProfileButton'>Update Profile</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile
