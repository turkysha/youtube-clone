import React from 'react'
import { useHistory } from 'react-router-dom'
import './SubsContentGrid.css'


function SubsContentGrid({ views, channel, timestamp, title, image  }) {
    const history = useHistory();
    return (
        <div className="subsGrid">
            <img src={image} alt={channel} onClick={() => history.push("/videoPage")}/>
            <div className="subsGrid__text">
                <h3 onClick={() => history.push("/videoPage")}>{title}</h3>
                <div>{channel}</div>
                <p className="susbGrid__headline">                     
                    {" " + views} views • {timestamp}  
                </p>
            </div>
        </div>
    )
}

export default SubsContentGrid
