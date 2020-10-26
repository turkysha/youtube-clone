import React from 'react'
import { useHistory } from 'react-router-dom'
import './VideoRow.css'

export default function VideoRow({ views, subs, description, channel, timestamp, title, image  }) {
    const history = useHistory()
    return (
        <div className="videoRow">
            <img src={image} alt={channel} onClick={() => history.push("/videoPage")}/>
            <div className="videoRow__text">
                <h3 onClick={() => history.push("/videoPage")}>{title}</h3>
                <p className="videoRow__headline">
                    {channel} • {" "}
                    <span className="videoRow__subscribers">
                        <span className="videoRow__subsNumber"> 
                            {subs} 
                        </span> 
                     Subscribers
                    </span> 
                     
                    {" " + views} views • {timestamp}  
                </p>
                <p className="videoRow__description">
                    {description}
                </p>
            </div>
        </div>
    )
}
