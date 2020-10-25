import React from 'react'
import './Trending.css'
import VideoRow from './VideoRow'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import MovieIcon from '@material-ui/icons/Movie';
import {useSelector} from 'react-redux'

export default function Trending() {
    const toggleScreen = useSelector(state => state.headerButton)

    return (
        <div className="trending" style={toggleScreen ? null : {flex:1}}>
            <div className="trending__top">
                <span>
                    <MusicNoteIcon className="trending__icon" />
                    <label>Music</label>
                </span>
                <span>
                    <VideogameAssetIcon className="trending__icon"/>
                    <label>Video games</label>
                </span>
                <span>
                    <MovieIcon className="trending__icon"/>
                    <label>Movies</label>
                </span>
            </div>
            <hr></hr>
            <div className="trending__bottom">
                <VideoRow 
                    image="https://img.youtube.com/vi/ykMHDKB0-1o/maxresdefault.jpg"
                    subs="500 K"
                    views="1.4 M"
                    description="Do you want a FREE one hour training... Visit our our page imediately!!!"
                    timestamp="1 hour ago"
                    channel="Travis Scott"
                    title="Travis Scott - YOSEMITE (Audio)"
                />
                <VideoRow 
                    image="https://img.youtube.com/vi/ykMHDKB0-1o/maxresdefault.jpg"
                    subs="500 K"
                    views="1.4 M"
                    description="Do you want a FREE one hour training... Visit our our page imediately!!!"
                    timestamp="1 hour ago"
                    channel="Travis Scott"
                    title="Travis Scott - YOSEMITE (Audio)"
                />
                <VideoRow 
                    image="https://img.youtube.com/vi/ykMHDKB0-1o/maxresdefault.jpg"
                    subs="500 K"
                    views="1.4 M"
                    description="Do you want a FREE one hour training... Visit our our page imediately!!!"
                    timestamp="1 hour ago"
                    channel="Travis Scott"
                    title="Travis Scott - YOSEMITE (Audio)"
                />
                <VideoRow 
                    image="https://img.youtube.com/vi/ykMHDKB0-1o/maxresdefault.jpg"
                    subs="500 K"
                    views="1.4 M"
                    description="Do you want a FREE one hour training... Visit our our page imediately!!!"
                    timestamp="1 hour ago"
                    channel="Travis Scott"
                    title="Travis Scott - YOSEMITE (Audio)"
                />
            </div>
        </div>
    )
}
