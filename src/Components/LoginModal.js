import { Modal } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLogin } from '../Redux/Search/SearchActions'
import './LoginModal.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function LoginModal() {
    const loginState = useSelector(state => state.loginStatus);
    const dispatch = useDispatch();

    if(loginState==true) return null;

    return (
        <div className="loginModal" open={loginState} onClose={() => dispatch(loginState(false))}>
            <div className="loginModal__overlay"/>
            <div className="loginModal__background">
                <div className="loginModal__left"> 
                    <img src="https://i.pinimg.com/originals/c8/cc/ba/c8ccbac628c0b3b28c76932db604f958.png" alt="loginLogo"/>
                </div>
                <div className="loginModal__right">
                    <img src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh.jpg" alt="youtube-icon"/>
                    <h1>Login to YouTube</h1>
                    <div className="loginModal__right__content">
                        <div>• Save your videos for later</div>
                        <div>• Subscribe to your favorite channels</div>
                        <div>• Contribute to the YouTube community</div>
                    </div>
                    <label>Learn more</label>
                    <div className="buttonDiv"> 
                        <button className="closeButton" onClick={() => dispatch(toggleLogin(true))}>NO THANKS</button>
                        <button className="loginButton" onClick={() => dispatch(toggleLogin(true))}>
                            <AccountCircleIcon className="accountCircle"/>
                            LOGIN
                        </button>   
                    </div>
                </div>
            </div>
        </div>
    )
}
