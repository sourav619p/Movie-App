import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../Styles/TrailerMovie.css'

function TrailerTrending({TrendingTitle}) {
  const [video,setVideo]=useState("");
  const [videoURL,setVideoURL] = useState("");

  function handleSearch(){
    setVideo(TrendingTitle)
    movieTrailer(video).then((res)=>{
      setVideoURL(res);
    });
  }
  useEffect(()=>{
    handleSearch()
  },[videoURL])
  return (
  <Fragment>
    <div className="Container">
    </div>
    <div className="player">
      <ReactPlayer url={videoURL} controls={true} muted={false} />
    </div>
  </Fragment>
  )
}

export default TrailerTrending
