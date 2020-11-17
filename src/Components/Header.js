import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchItems from './SearchItems'
import { updateSearchList, toggleHeaderButtonAction, updateSearchInput} from '../Redux/Search/SearchActions'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'



function Header(){
    const newInputValue = useSelector(state => state.newSearchInputValue);
    const dispatch = useDispatch()

    const fetchUrl = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyDCg18ul8kCURkFsV2e_CzDcieYLveY7Uc"
    const [channel,setChannel] = useState('');

    useEffect(() =>{
        axios.get(fetchUrl)
        .then(res => {
            let stringify = JSON.stringify(res.data)
            setChannel(JSON.parse(stringify).items[0].snippet.thumbnails.high.url)
        })
        .then(err => {
            console.log(err)
        })
    },[])



    const changeHandler = (event) => {
        const {value} = event.target;
        let suggestions = [];   
        if(value.length > 0){
            suggestions = SearchItems.sort().filter(item => item.toLowerCase().startsWith(value.toLowerCase()))
            suggestions.length = 12;
        }
        dispatch(updateSearchInput(value));
        dispatch(updateSearchList(suggestions))
    }

    const inputOnBlur = (event) => {
        let suggestions = [];
        dispatch(updateSearchList(suggestions))
    }

    const toggleHeaderButton = () => {
        dispatch(toggleHeaderButtonAction())
    }

    return(
        <div className="header">
            <div className="header__left">
                <div onClick={toggleHeaderButton}>
                    <MenuIcon className="header__menuIcon"/>
                </div>   
                <Link to={"/"}>
                    <img className="header__logo"src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh.jpg" alt="youtube-logo"/>
                </Link>         
            </div>
            <div className="header__input">
                <input value={newInputValue} onChange={changeHandler} placeholder="Search" type="text" onBlur={inputOnBlur} onFocus={changeHandler}/>
                {(newInputValue.length > 0) ? 
                <Link to={`/search/${newInputValue}`}>
                    <SearchIcon className="header__input__button" />
                </Link>
                :
                <div>
                <SearchIcon className="header__input__button" />
                </div>
                } 
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon__upload"/>
                <AppsIcon className="header__icon__youtube"/>
                <NotificationsIcon className="header__icon__notifications"/>
                <Avatar className="header__avatar"src={channel} alt="youtube-avatar"/>
                <h1 className="header__popup__upload" >Upload</h1>
                <h1 className="header__popup__youtube" >Youtube Apps</h1>
                <h1 className="header__popup__notifications" >Notifications</h1>
            </div>      
        </div>
    )
}

export default Header;