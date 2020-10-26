import React from 'react'
import './VideoPage.css'
import VideoPlayer from './VideoPlayer'
import Comment from './Comment'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VideoRowVideoPage from './VideoRowVideoPage';
import VideoComponentItems from './VideoComponentItems'

function VideoPage() {

    
    const sugesstedVideo = VideoComponentItems.map(item => <VideoRowVideoPage image={item.image} subs={item.subs} views={item.views} 
        description={item.description} timestamp={item.timestamp}
        channel={item.channel} title={item.title} />)

    return (
        <div className="videoPage">
            <div className="videoPage__left">
                 <VideoPlayer />
                <h1 className="videoPage__title">React youtube clone 2020</h1>
                <div className="videoPage__info">
                    <div className="videoPage__info__left">
                        <h3>30.123 views</h3>
                        <label>{" • "}</label>
                        <h3>26.10.2020.</h3>
                    </div>
                    <div className="videoPage__info__icons">
                        <button>
                            <ThumbUpAltIcon className="videoPage__info__icon"/>
                            <label className="videoPage__info__label">543</label> 
                        </button>
                        <button>
                            <ThumbDownIcon className="videoPage__info__icon"/>
                            <label className="videoPage__info__label">13</label> 
                        </button>
                        <button>
                            <ShareIcon className="videoPage__info__icon"/>
                            <label className="videoPage__info__label">SHARE</label>
                        </button>
                        <button>
                            <PlaylistAddIcon className="videoPage__info__icon"/>
                            <label className="videoPage__info__label">SAVE</label>
                        </button>
                        <button>
                            <MoreHorizIcon className="videoPage__info__icon"/>
                        </button>
                    </div>
                </div>
                <hr></hr>
                <div className="videoPage__channelInfo">
                <div className="videoPage__channelInfo__left">
                    <Avatar className="videoPage__channelInfo__left__avatar" src="https://www.nme.com/wp-content/uploads/2019/04/peaky_shelby_2000-696x442.jpg" alt="profile-pic"/>
                    <div className="videoPage__channelInfo__profileDesc">
                        <h3>Thommy Shelby</h3>
                        <h4>10 mil. subscribers</h4>
                    </div>
                </div>
                <div className="videoPage__channelInfo__right">
                    <button className="joinButton">JOIN</button>
                    <button className="subscribeButton">SUBSCRIBE</button>
                    <button className="notificationsButton">
                        <NotificationsNoneIcon className="notificationsIcon"/>
                    </button>
                </div>
                    
                </div>
                <pre>
                    <div>Date streamed: 10/24/2020</div>
                    <pre></pre>
                    <pre>{" "}</pre>
                    <div>My GitHub account: https://github.com/turkysha</div>
                    <pre></pre>
                    <div>UpWork profile: https://www.upwork.com/freelancers/~0185153fdaf59417e6</div>
                    <pre></pre>
                    <div>Fiverr gig: https://www.fiverr.com/turkysha/make-full-stack-web-applications</div>
               </pre>
                <hr></hr>
                <div>
                    <label>150 comments</label>
                    <img alt="comment-profile-pic"></img>
                </div>
                <Comment></Comment>

            </div>
            <div className="videoPage__right">
                <div>
                    <label>Incoming</label>
                    {sugesstedVideo}
                </div>
                
            </div>
            
        </div>
    )
}

export default VideoPage
