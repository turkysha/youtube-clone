import React,{useRef, useState} from 'react'
import './VideoPlayer.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PauseIcon from '@material-ui/icons/Pause';
import { Slider } from '@material-ui/core';
import videoPlayBack from './yosemite.mp4'
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import SettingsIcon from '@material-ui/icons/Settings';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import ReplayIcon from '@material-ui/icons/Replay';

function VideoPlayer() {

    const [videoPlaying, setVideoPlaying] = useState(false)
    const [time, setTime] = useState({s:0,m:0})
    const videoPlayer = useRef(null)
    const videoPlayerContainer = useRef(null)
    const slider = useRef(null)
    const [videoDuration, setVideoDuration] = useState({s:0,m:0});
    const [volumenValue, setVolumenValue] = useState(20);
    const [timeLine, setTimeLine] = useState(0)
    const [videoPreviousState, setVideoPreviousState] = useState(false)
    const [dataLoaded, setDataLoaded] = useState(0)
    const [waiting, setWaiting] = useState(false)
    const [qualityOptions, setQualityOptions] = useState(false)
    const [mouseStyle, setMouseStyle] = useState(true)
    const [videoPaused, setVideoPaused] = useState(false)
    const [volumeOff, setVolumeOff] = useState(false)
    const [videoEnded, setVideoEnded] = useState(false)

    var updateM = time.m;
    var updateS = time.s;
    var timer;

    React.useEffect(()=>{
        var cursorDiv = document.getElementById("cursorDiv");
        cursorDiv.addEventListener("mousemove",mousemv);
        cursorDiv.addEventListener("mouseleave",mouselv)

        return ()=>{
            cursorDiv.removeEventListener("mousemove",mousemv)
            cursorDiv.removeEventListener("mouseleave",mouselv)
        }
    },[])

    const toggleVideoPlaying = () =>{
        videoPlaying ? videoPlayer.current.pause() : videoPlayer.current.play();
        setVideoPlaying(!videoPlaying)
    }

    const handleVolumeValue = (event, newValue) =>{
        setVolumenValue(newValue);
        videoPlayer.current.volume = volumenValue/100;
        if(newValue > 0){
            setVolumeOff(false)
        }
        else{
            setVolumeOff(true)
        }
    }

    const handleVideoDuration = () =>{
        setVideoPaused(false)
        setVideoEnded(false)
        let minutes = parseInt(videoPlayer.current.duration/60);
        let seconds = parseInt(videoPlayer.current.duration % 60);
        setVideoDuration({s:seconds,m:minutes})
        if(videoPlaying === false){
            setVideoPlaying(!videoPlaying)
        }
    }

    const handleVideoEnd = () =>{
        setTime({s:videoDuration.s,m:videoDuration.m})
        setVideoEnded(true)
        setVideoPlaying(!videoPlaying)
    }

    const handleSlider = () =>{
        setTimeLine(slider.current.value)
        videoPlayer.current.currentTime = videoPlayer.current.duration * (slider.current.value/100);
        updateM = parseInt(videoPlayer.current.currentTime/60);
        updateS = parseInt(videoPlayer.current.currentTime%60);
        setTime({s:updateS,m:updateM})
    }

    const handleSliderMouseDown = ()=>{
        setVideoPreviousState(videoPlaying)
        if(videoPlaying === true){
            videoPlayer.current.pause()
            setVideoPlaying(!videoPlaying)
        }
    }

    const handleMouseUp = () =>{
        if(videoPreviousState === true){
            toggleVideoPlaying()
        }
    }

    const handleFullscreen = () =>{
        videoPlayerContainer.current.webkitRequestFullScreen();    
    }

    const handleFullScreenExit = () =>{
        document.exitFullscreen();
    }

    const handleVideoPause = () =>{
        if(videoPlaying === true){
            setVideoPlaying(false)
        }
        setVideoPaused(true)
    }

    const handleVideoBuffered = () =>{
        if(videoPlayer.current.buffered.length>0 && !videoPlayer.current.seeking && waiting === false ){
            var range = 0;
            var bf = videoPlayer.current.buffered;
            var time = videoPlayer.current.currentTime;
            while(!(bf.start(range) <= time && bf.end(range) >= time)){
                range = range+1;
            }
            var loadEndPercentage = bf.end(range) / videoPlayer.current.duration;
            setDataLoaded(loadEndPercentage*100)
        }
    }

    const handleWaiting = () =>{
        setWaiting(true);
    }

    const toggleQualityOptions = () => {
        setQualityOptions(!qualityOptions)
    }

    
    const mousemv = () =>{
        setMouseStyle(true)
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            setMouseStyle(false)
        },3000);
    }
    
    const mouselv = ()=>{
        clearTimeout(timer)
        setMouseStyle(true)
    }

    const timeUpdate = ()=>{
        setTimeLine(videoPlayer.current.currentTime/videoPlayer.current.duration*100)
        updateM = parseInt(videoPlayer.current.currentTime/60);
        updateS = parseInt(videoPlayer.current.currentTime%60);
        setTime({s:updateS,m:updateM})
    }

    return (
        <div className="videoplayer" ref={videoPlayerContainer} style={videoPaused ? {cursor:"auto"} : (mouseStyle ? {cursor:"auto"}:{cursor:"none"})}>
            <div id="cursorDiv" className="cursorToggleDiv" onClick={toggleVideoPlaying}></div>
            <div className="videoplayer__hover"  style={videoPaused ? {WebkitBoxShadow: "inset 0px -50px 50px -30px rgba(0,0,0,0.8)",boxShadow: "inset 0px -50px 50px -30px rgba(0,0,0,0.8)"} 
             : (mouseStyle ? {display:"flex"}:{display:"none"})}></div>
            <DataUsageIcon className={`waitingLabel ${waiting && "waiting"}`}>Waiting</DataUsageIcon>
            <video className="videoplayer__player"
                src={videoPlayBack}
                ref={videoPlayer}
                poster="https://www.videograbber.net/wp-content/uploads/2017/12/youtube-thumbnail-grabbers.jpg"
                onEnded={handleVideoEnd}
                onLoadedData={toggleVideoPlaying}
                onPlay={handleVideoDuration}
                onPause={handleVideoPause}
                preload="true"
                onProgress={handleVideoBuffered}
                onWaiting={handleWaiting}
                onPlaying={() => setWaiting(false)}
                onLoadStart={() => videoPlayer.current.volume=0.2}
                controls={false}
                onTimeUpdate={timeUpdate}
            >
            </video>
            <div className="videoplayer__options" style={videoPaused ? {opacity: 100, display: "flex"} : (!mouseStyle ? {display: "none"} : {display: "flex"})} >
                <div className="videoplayer__options__sliderDiv">
                    <input type="range" ref={slider} className="redSlider" value={timeLine} onChange={handleSlider} min={0} max={100} step={0.1} onMouseDown={handleSliderMouseDown} onMouseUp={handleMouseUp} />
                    <hr className="greyLine" />
                    <hr className="lightGreyLine" style={{width: dataLoaded+'%'}}/>
                    <hr className="redLine" style={{width:timeLine+'%'}}></hr>
                </div>
                <button className="videoplayer__options__play" onClick={toggleVideoPlaying}>
                    { videoEnded ? <ReplayIcon className="videoplayer__icon__volume"/> : (videoPlaying ? <PauseIcon className="videoplayer__icon__pause"/> : <PlayArrowIcon className="videoplayer__icon"/>)}
                </button>
                <div className="sliderTransition">
                    { volumeOff ? <VolumeOffIcon className="videoplayer__icon__volume"/> : <VolumeUpIcon className="videoplayer__icon__volume"/>}
                    <Slider  value={volumenValue}  onChange={handleVolumeValue} className="videoplayer__options__slider" step={1} min={0} max={100}/>
                </div>
                <label>{time.m}:{(time.s < 10) ? "0" + time.s : time.s}/{videoDuration.m}:{(videoDuration.s <10) ? "0"+videoDuration.s : videoDuration.s}</label>
                <div className="videoplayer__options__right">
                    <button className="videoplayer__options__quality__button" onClick={toggleQualityOptions}>
                        <SettingsIcon className="videoplayer__icon__volume"/>
                    </button>
                    <div className="videoplayer__options__quality" style={qualityOptions ? {display:""} : {display:"none"}}>
                        <div></div>
                        <label>Quality</label>
                        <hr></hr>
                        <ul>
                            <li>1080p</li>
                            <li>720p</li>
                            <li>480p</li>
                            <li>360p</li>
                            <li>240p</li>
                            <li>144p</li>
                        </ul>
                    </div>
                    {document.fullscreenElement ?
                    <button onClick={handleFullScreenExit}>
                        <FullscreenExitIcon className="videoplayer__icon"/>
                    </button>
                    :
                    <button onClick={handleFullscreen}>
                        <FullscreenIcon className="videoplayer__icon"/>
                    </button>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default VideoPlayer
