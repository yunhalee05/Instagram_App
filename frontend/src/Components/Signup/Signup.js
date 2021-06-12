import React, { useState } from 'react'
import '../LoginPage/LoginPage.css'
import {storage, auth} from '../firebase'

function Signup() {

    const [emailId, setEmailId] = useState("");
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const newSignUp=()=>{
        auth.createUserWithEmailAndPassword(emailId, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            let payload = {
                "userId" : user.displayName,
                "userName" : userName,
                "name": name,
                "profileImage" : ""
            }

            const requestOptions = {
                method:"POST",
                headers:{ "ContentType" : "application/json"}, 
                body: JSON.stringify(payload)
            }

            fetch("localhost:8080/users", requestOptions)
            .then(response=> response.json())
            .then(data =>{
                localStorage.setItem("users", user);
                window.location.reload();

            })
            .catch(error=>{
                
            })
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    }


    return (
        <div>
            <input className="loginpage__text" value = {emailId} required onChange={e=> setEmailId(e.currentTarget.value)} type="text" placeholder="Mobile number or email" />
            <input className="loginpage__text" value = {name} required onChange={e=>setName(e.currentTarget.value)} type="text" placeholder="Full Name" />
            <input className="loginpage__text" value = {userName} required onChange={e=>setUserName(e.currentTarget.value)} type="text" placeholder="Username" />
            <input className="loginpage__text" value={password}  required onChange={e=>setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
            <button className="loginpage__button"  onClick={newSignUp} >Sign up</button>
        </div>
    )
}

export default Signup
