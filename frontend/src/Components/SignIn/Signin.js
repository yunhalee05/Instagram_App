import React from 'react'
import '../LoginPage/LoginPage.css'

function Signin() {
    return (
        <div>
            <input className="loginpage__text" type="text" placeholder="Phone number, username, or email" />
            <input className="loginpage__text" type="password" placeholder="Password" />
            <button className="loginpage__button" >Log In</button>

        </div>
    )
}

export default Signin
