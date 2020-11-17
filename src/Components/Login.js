import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'
 
export default function Login() {

    const history = useHistory();

    const [usernamePlaceholder, setUsernamePlaceholder] = useState("Username")
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password")

    return (
        <div className="login">
            <div className="box">
                <img src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh.jpg" alt="youtube-logo"></img>
                <label className="label__login">Login</label>
                <label className="label__youtube">Continue to YouTube</label>
                <div className="login__username">
                    <input type="text" placeholder={usernamePlaceholder} className="input__username" onFocus={ () => setUsernamePlaceholder("")} onBlur={ () => setUsernamePlaceholder("Username")}/>
                    <label>Username</label>
                </div>
                <div className="login__password">
                    <input type="password" className="input__password" placeholder={passwordPlaceholder} onFocus={ () => setPasswordPlaceholder("")} onBlur={ () => setPasswordPlaceholder("Password")}/>
                    <label>Password</label>
                </div>
                <div className="login__register">
                    <label>You are not registered yet? </label>
                    <label className="login__registerLabel">Register here!</label>
                </div>
                <div className="button__div">
                    <button className="thanksBtn" onClick={() => history.push("/")}>NO THANKS</button>
                    <button className="loginBtn" onClick={() => history.push("/")}>LOGIN</button>
                </div>
                
            </div>
            
        </div>
    )
}
