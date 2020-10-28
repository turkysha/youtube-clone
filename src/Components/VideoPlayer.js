import React,{useRef, useState} from 'react'
import './VideoPlayer.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PauseIcon from '@material-ui/icons/Pause';
import { Slider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setTimerInterval } from '../Redux/Search/SearchActions';
import videoPlayBack from './videoForClone.webm'


function VideoPlayer() {

    const [videoPlaying, setVideoPlaying] = useState(false)
    const [time, setTime] = useState({s:0,m:0})
    const interv = useSelector(state => state.newTimerInterval)
    const dispatch = useDispatch()
    const videoPlayer = useRef(null)
    const[videoDuration, setVideoDuration] = useState({s:0,m:0});
    const [volumenValue, setVolumenValue] = useState(30);
    const [timeLine, setTimeLine] = useState(0)
    var updateM = time.m;
    var updateS = time.s;
    var autoPlayOnce = true;

    const toggleVideoPlaying = (event) =>{
        if(time.s === videoDuration.s && time.m === videoDuration.m){
            updateM=0;
            updateS=0;
        }
        videoPlaying ? videoPlayer.current.pause() : videoPlayer.current.play();
        videoPlaying ? timerPause() : timerStart()
        setVideoPlaying(!videoPlaying)
    }

    const handleVolumeValue = (event, newValue) =>{
        setVolumenValue(newValue);
        videoPlayer.current.volume = volumenValue/100;
    }

    const handleVideoDuration = () =>{
        let minutes = parseInt(videoPlayer.current.duration/60);
        let seconds = parseInt(videoPlayer.current.duration % 60);
        setVideoDuration({s:seconds,m:minutes})
    }

    const timerPause = () =>{
        clearInterval(interv)
    }

    const timerStart = () =>{
        runTimer()
        dispatch(setTimerInterval(setInterval(runTimer, 1000)))
    }

    const runTimer = () =>{
        setTimeLine(videoPlayer.current.currentTime/videoPlayer.current.duration*100)
        if(updateS === 59){
            updateM++;
            updateS = -1;
        }
        updateS++;
        return setTime({s:updateS,m:updateM})
    }

    const handleVideoEnd = () =>{
        runTimer()
        clearInterval(interv)
        setVideoPlaying(!videoPlaying)
        setTime({s:videoDuration.s,m:videoDuration.m})
    }

    return (
        <div className="videoplayer"onMouseOver={handleVideoDuration}>
            <video className="videoplayer__player"
                src={videoPlayBack}
                onClick={toggleVideoPlaying}
                ref={videoPlayer}
                poster="https://www.videograbber.net/wp-content/uploads/2017/12/youtube-thumbnail-grabbers.jpg"
                onEnded={handleVideoEnd}
            >
            </video>
            <div className="videoplayer__options">
            <button className="videoplayer__options__play" onClick={toggleVideoPlaying}>
                { videoPlaying ? <PauseIcon className="videoplayer__icon"/> : <PlayArrowIcon className="videoplayer__icon"/>}
            </button>
            <div className="sliderTransition">
                <VolumeUpIcon className="videoplayer__icon__volume"/>
                <Slider  value={volumenValue}  onChange={handleVolumeValue} className="videoplayer__options__slider" defaultValue={20} step={1} min={0} max={100}/>
            </div>
            <label>{time.m}:{(time.s < 10) ? "0" + time.s : time.s}/{videoDuration.m}:{(videoDuration.s <10) ? "0"+videoDuration.s : videoDuration.s}</label>
            </div>
            <hr className="greyLine"/>
            <hr className="redLine" style={{width:timeLine+'%'}}></hr>
        </div>
    )
}

export default VideoPlayer
