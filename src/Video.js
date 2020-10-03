import React, { useRef, useState } from 'react'
import './Video.css'
function Video({src}) {
    const  videoRef =useRef(null);
    const [videoPlaying,setVideoPlaying] = useState(false)
    const stopVideo =() =>{
      if(videoPlaying){
          videoRef.current.pause();
          setVideoPlaying(false)
      }else{
          videoRef.current.play();  
           setVideoPlaying(true);
      }
    }
    return (
        <div  onClick={stopVideo} className="video_app">
            <video  className="video_app_video"
          
            ref={videoRef}
              src={src} 
              alt=''
              loop
              ></video>
        </div>
    )
}

export default Video
