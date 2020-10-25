import React from 'react'
import './SearchPage.css'
import TunedOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import profilna from './profilna.jpg'
import VideoRow from './VideoRow'
import {useSelector} from 'react-redux'

function SearchPage(){
    const descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices vitae risus ac varius. Integer ac feugiat orci. Donec faucibus elit orci, nec convallis sem rutrum quis. Nam sollicitudin, dui ac sollicitudin consectetur, ligula sapien luctus eros, a blandit ante risus et urna"
    const toggleScreen = useSelector(state => state.headerButton)
    return(
        <div className="searchpage" style={toggleScreen ? null : {flex:1}}>
            <div className="searchpage__filter">
                <TunedOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr></hr>
            <div className="searchPage__channel">
                <ChannelRow
                    image={profilna}
                    channel="Fran Turkovic"
                    verified={true}
                    subs="660 K"
                    noOfVideos={380}
                    description={descriptionText}
                />
            </div>
            <hr></hr>
            <div className="searchPage__bottom">
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

export default SearchPage;