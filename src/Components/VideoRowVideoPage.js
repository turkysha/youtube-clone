import React from 'react'
import { useHistory } from 'react-router-dom'
import './VideoRowVideoPage.css'


export default function VideoRow({ views, subs, description, channel, timestamp, title, image, }) {
    const history = useHistory()
    return (
        <div className="videoRowVideoPage">
            <img src={image} alt={channel} onClick={() => history.push("/videoPage")}/>
            <div className="videoRowVideoPage__text">
                <h3 onClick={() => history.push("/videoPage")}>{title}</h3>
                <div className="videoRowVideoPage__headline">
                    {channel}
                </div>
                <div className="videoRowVideoPage__headline">
                    {" " + views} views • {timestamp}  
                </div>
            </div>
        </div>
    )
}
