import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import { useSelector } from 'react-redux'

function SideBar({selected}){
    let toggleSideBarButton = useSelector(state => state.headerButton);
    let homeSelected = false;
    let trendingSelected = false;
    let subscriptionsSelected= false;
    let librarySelected= false;
    let historySelected= false;
    let yourVideosSelected = false;
    let watchLaterSelected = false;
    let likedVideosSelected = false;
    let showMoreSelected = false;
    switch(selected){
        case "Home": homeSelected = true; break;
        case "Trending": trendingSelected = true;break;
        case "Subscriptions": subscriptionsSelected = true;break;
        case "Library": librarySelected = true;break;
        case "History": historySelected = true;break;
        case "Your videos": yourVideosSelected = true;break;
        case "Watch later": watchLaterSelected = true;break;
        case "Liked videos": likedVideosSelected = true;break;
        case "Show more": showMoreSelected = true;break;
        default: 
    }

    return(
        <div className="sidebar" style={toggleSideBarButton ? null : {flex:0.01}}>
            <SidebarRow selected={homeSelected} title={toggleSideBarButton ? "Home" : null} Icon={HomeIcon} route="/"/>
            <SidebarRow selected={trendingSelected} title={toggleSideBarButton ? "Trending" : null} Icon={WhatshotIcon} route="/trending"/>
            <SidebarRow selected={subscriptionsSelected} title={toggleSideBarButton ? "Subscriptions" : null} Icon={SubscriptionsIcon}/>
            <hr></hr>
            <SidebarRow selected={librarySelected} title={toggleSideBarButton ? "Library" : null} Icon={VideoLibraryIcon}/>
            <SidebarRow selected={historySelected} title={toggleSideBarButton ? "History" : null} Icon={HistoryIcon}/>
            <SidebarRow selected={yourVideosSelected} title={toggleSideBarButton ? "Your videos" : null} Icon={OndemandVideoIcon}/>
            <SidebarRow selected={watchLaterSelected} title={toggleSideBarButton ? "Watch later" : null} Icon={WatchLaterIcon}/>
            <SidebarRow selected={likedVideosSelected} title={toggleSideBarButton ? "Liked videos" : null} Icon={ThumbUpAltOutlinedIcon}/>
            <SidebarRow selected={showMoreSelected} title={toggleSideBarButton ? "Show more" : null} Icon={ExpandMoreOutlinedIcon}/>
            <hr></hr>
        </div>
    )
}

export default SideBar;