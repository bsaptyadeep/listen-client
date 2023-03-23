import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import MainImage from '../../assets/mainImage.png';


const AudioContainer = ({ audio }) => {
    const url = `https://res.cloudinary.com/saptya/video/upload/${audio.publicId}`;

    return (
        <div className='audio-wrapper'>
            <h2>{audio.title}</h2>
            <div className='audio-container'>
            <img src={MainImage} height={100} alt="main" />
            <AudioPlayer className='hello'
                src={url}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
        </div>
    )
}

export default AudioContainer