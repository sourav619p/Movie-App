import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import NoImg from './NoImage.jpg';
import { Container } from './NavBar';
import '../Styles/Videos.css'

function Movies() {
  const {toggle, inputValue} = useContext(Container)
  const input =inputValue
  const [moviesData,setMoviesData]=useState([]);
  const [trailer,setTrailer]= useState(true)
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = "https://image.tmdb.org/t/p/w500/"
  const MovieCall = async () =>{
    const data = await axios.get( Api,{
      params:{
        api_key: '911faf4d217a1906ddd69c7cc01f31cc',
        query: input
      }
    })
    const results= data.data.results;
    setMoviesData(results)
  }
  useEffect(() => {
    MovieCall()
  },[input])
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className='movies-container'>
      {moviesData.map((movie)=>{
        return(
          <Fragment>
        <div id={trailer ? 'container' : 'Nocontainer'}>
          <AiFillPlayCircle color='green' fontSize={40} id="playIcon" />
          <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg } alt='' />
          <h3 className='movie-name' id={movie.title.length > 28 ? 'smaller-Text' : ''}>{movie.title}</h3>
        </div>
        </Fragment>
        )
      })}
      </div>
      </div>
    </Fragment>
  )
}

export default Movies
