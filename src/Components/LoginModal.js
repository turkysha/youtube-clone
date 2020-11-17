import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginModal } from '../Redux/Search/SearchActions'
import './LoginModal.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';

export default function LoginModal() {
    const loginModalState = useSelector(state => state.loginModalStatus);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleLogin = () =>{
        dispatch(toggleLoginModal(false))
        history.push("/login");
    }

    if(loginModalState===false || !history.location.pathname) return null;

    return (
        <div className="loginModal">
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
                        <button className="closeButton" onClick={() => dispatch(toggleLoginModal(false))}>NO THANKS</button>
                        <button className="loginButton" onClick={handleLogin}>
                            <AccountCircleIcon className="accountCircle"/>
                            LOGIN
                        </button>   
                    </div>
                </div>
            </div>
        </div>
    )
}
