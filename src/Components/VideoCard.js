import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}){
    let roundedViews = views;
    let biggerMillion = false;
    let biggerThousand = false;
    if(views > 999999){
        const viewsFormatted = views / 1000000;
        roundedViews = Math.round(viewsFormatted * 10) / 10;
        biggerMillion=true;
        biggerThousand=true; 
    }
    else if(views > 9999){
        const viewsFormatted = views / 1000;
        roundedViews = Math.round(viewsFormatted * 10) / 10;
        biggerMillion=false;
        biggerThousand=true; 
    }
    

    return(
        <div className="videocard">
            <img src={image} alt="video" className="videocard__thumbnail"/>
            <div className="videocard__info">
                <Avatar className="videocard__avatar" src={channelImage} alt={channel}/>
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    { biggerMillion ? 
                    <p>
                        {roundedViews} M views • {timestamp}
                    </p>
                    :
                    biggerThousand ?
                    <p>
                        {roundedViews} K views • {timestamp}
                    </p>
                    :
                    <p>
                        {roundedViews} views • {timestamp}
                    </p>    
                }
                </div>
            </div>
        </div>
    )
}

export default VideoCard;