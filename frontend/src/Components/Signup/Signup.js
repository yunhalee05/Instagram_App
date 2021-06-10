import React from 'react'
import '../LoginPage/LoginPage.css'

function Signup() {
    return (
        <div>
            <input className="loginpage__text" type="text" placeholder="Mobile number or email" />
            <input className="loginpage__text" type="text" placeholder="Full Name" />
            <input className="loginpage__text" type="text" placeholder="Username" />
            <input className="loginpage__text" type="password" placeholder="Password" />
            <button className="loginpage__button" >Sign up</button>
        </div>
    )
}

export default Signup
