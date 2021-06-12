import React, { useState } from 'react'
import '../LoginPage/LoginPage.css'
import {storage, auth} from '../firebase';

function Signin() {

    const [emailId, setEmailId] = useState("")
    const [password, setPassword] = useState("")

    const login=() =>{
        auth.signInWithEmailAndPassword(emailId, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            localStorage.setItem("users", user);
            window.location.reload();

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    } 

    return (
        <div>
            <input className="loginpage__text" value={emailId} onChange={e=> setEmailId(e.currentTarget.value)} type="text" placeholder="Phone number, username, or email" />
            <input className="loginpage__text" value = {password} onChange={e=>setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
            <button className="loginpage__button"  onClick={login} >Log In</button>

        </div>
    )
}

export default Signin
