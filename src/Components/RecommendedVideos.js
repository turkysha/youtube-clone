import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
import profilna from './profilna.jpg'
import thumbnail from './thumbnail.jpg'
import { useSelector} from 'react-redux'

function RecommendedVideos(){
    const toggleScreen = useSelector(state => state.headerButton)

    return(
        <div className="recommendedVideos" style={toggleScreen ? null : {flex:1}}>
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={152000}         
                    timestamp="1 hour ago"     
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={2313510}
                    timestamp="1 hour ago"       
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={86543} 
                    timestamp="1 hour ago"      
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={1247}     
                    timestamp="1 hour ago"  
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={2313510}
                    timestamp="1 hour ago"       
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={2313510}     
                    timestamp="1 hour ago"  
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={152000}         
                    timestamp="1 hour ago"     
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={2313510}
                    timestamp="1 hour ago"       
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={86543} 
                    timestamp="1 hour ago"      
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={1247}     
                    timestamp="1 hour ago"  
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={2313510}
                    timestamp="1 hour ago"       
                />
                <VideoCard
                    title="Learn programming React in 2020"
                    channel="Fran Turkovic"
                    channelImage={profilna}
                    image={thumbnail}
                    views={2313510}     
                    timestamp="1 hour ago"  
                />
            </div>
        </div>
    )
}

export default RecommendedVideos;