import React,{useRef, useState} from 'react'
import './VideoPlayer.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PauseIcon from '@material-ui/icons/Pause';
import { Slider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setTimerInterval } from '../Redux/Search/SearchActions';


function VideoPlayer() {
    const videoLink = "https://r2---sn-v2uph5-15bl.googlevideo.com/videoplayback?expire=1603767913&ei=CTqXX_bNIJb61wKejaeADQ&ip=89.201.184.149&id=o-ADs0dap-kZ1il2Dcjc71v5HsCHWR1BjD4T7qDXRPsERk&itag=22&source=youtube&requiressl=yes&mh=1g&mm=31%2C29&mn=sn-v2uph5-15bl%2Csn-c0q7lnsl&ms=au%2Crdu&mv=m&mvi=2&pcm2cms=yes&pl=17&initcwndbps=591250&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=184.714&lmt=1536427297183846&mt=1603746164&fvip=2&c=WEB&txp=5531332&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAM_d1qu-QFGCeZGOthNRJFMxcI2MPBoLIinknr3s-dirAiAzCL3KqwdrLPpdU0yCORaa85YlvWTLjjUmDPzh8fPVTA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANWaeilu-T8_97jZAl7G6NjwXAdvexgS480A8yfe2djUAiEAi3wPQ0-t1X8UVjx9yNK2lrKn1o0MWl9qxe40E3ZTwTY%3D"

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
                src={videoLink}
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
