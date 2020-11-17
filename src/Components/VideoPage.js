import React, { useState } from 'react'
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
import SortIcon from '@material-ui/icons/Sort';
import CommentAdd from './CommentAdd';

function VideoPage() {

    const [videoLiked, setVideoLiked] = useState(false)
    const [videoDisLiked, setVideoDisLiked] = useState(false)
    const [numberOfLikes, setNumberOfLikes] = useState(543)
    const [numberOfDisLikes, setNumberOfDisLikes] = useState(16)
    const [radioState, setRadioState] = useState("male")

    const handleLikeButton = () =>{
        if(!videoLiked && videoDisLiked){
            setVideoDisLiked(false)
            setVideoLiked(true)
            setNumberOfLikes(numberOfLikes+1)
            setNumberOfDisLikes(numberOfDisLikes-1)
        }
        else if(!videoLiked && !videoDisLiked){
            setVideoLiked(true)
            setNumberOfLikes(numberOfLikes+1)
        }
        else{
            setVideoLiked(false)
            setNumberOfLikes(numberOfLikes-1)
        }
    }

    const handleUnLikeButton = () =>{
        if(!videoDisLiked && videoLiked){
            setVideoLiked(false)
            setVideoDisLiked(true)
            setNumberOfDisLikes(numberOfDisLikes+1)
            setNumberOfLikes(numberOfLikes-1)
        }
        else if(!videoDisLiked && !videoLiked){
            setVideoDisLiked(true)
            setNumberOfDisLikes(numberOfDisLikes+1)
        }
        else{
            setVideoDisLiked(false)
            setNumberOfDisLikes(numberOfDisLikes-1)
        }
    }
  
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
                        <div className="videoPage__info__icons" >
                            <button onClick={handleLikeButton} >
                                <ThumbUpAltIcon className={`videoPage__info__icon ${videoLiked && "videoLiked"}`}/>
                                <label className="videoPage__info__label">{numberOfLikes}</label> 
                            </button>
                            <button onClick={handleUnLikeButton}>
                                <ThumbDownIcon className={`videoPage__info__icon ${videoDisLiked && "videoDisLiked"}`}/>
                                <label className="videoPage__info__label">{numberOfDisLikes}</label> 
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
                    <br></br>
                    <div>Travis Scott - YOSEMITE (Audio)</div>
                    <a className="videoPage__info__link" href="https://www.youtube.com/watch?v=ykMHDKB0-1o">https://www.youtube.com/watch?v=ykMHDKB0-1o</a>
               </pre>
                <hr></hr>
                <div className="videoPage__comments__top">
                    <label>150 comments</label>
                    <button className="videoPage__sortBtn">
                        <SortIcon className="videoPage__comments_sortIcon"/>
                        SORT BY
                    </button>
                </div>
                <div className="videoPage__comments__content">
                    <CommentAdd></CommentAdd>
                    <Comment></Comment>
                </div>
            </div>
            <div className="videoPage__right">
                <div>
                    <label>Next</label>
                    {sugesstedVideo}
                </div>
                
            </div>
            
        </div>
    )
}

export default VideoPage
