import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChannelRow.css'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

export default function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">    
            <Avatar className="channelRow__logo" src={image} alt={channel}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon className="channelRow_verified"/>}</h4>
                <p>{subs} subsribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
