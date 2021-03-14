import React, { useRef, useState } from 'react';
// font awesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// the actual icons
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';


const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    // reference to access the html tag "audio"
    const audioRef = useRef(null);

    // Time format

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    // state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration: duration
        })
    };

    // Event Handlers

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({
            ...songInfo,
            currentTime: e.target.value
        });
    };

    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={ faAngleLeft } size="2x"/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={ isPlaying ? faPause : faPlay } size="2x" />
                <FontAwesomeIcon className="skip-forward" icon={ faAngleRight } size="2x"/>
            </div>
            <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;