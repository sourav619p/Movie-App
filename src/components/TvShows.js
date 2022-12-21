import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'
import NoImg from './NoImage.jpg'
import { Container } from './NavBar'
import '../Styles/Videos.css'

function TvShows() {
  const {toggle, inputValue} = useContext(Container)
  const [showData,setShowData]=useState([])
  const [trailer,setTrailer] =useState(true)
  const [title,setTitle] = useState('')
  const Api ="https://api.themoviedb.org/3/discover/tv"
  const Images = "https://image.tmdb.org/t/p/w500/"
  const TvShows = async () =>{
    const data = await axios.get(Api,{
      params:{
        api_key: '911faf4d217a1906ddd69c7cc01f31cc'
      }
    })
    const results=data.data.results
    setShowData(results)
  }
  useEffect(()=>{
    TvShows()
  },[])
  console.log(showData)
  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className='movies-container'>
      {showData.map((shows)=>{
              return(
                <Fragment key={shows.id}>
              <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='green' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={()=> TvShowTitle(shows)} />
              <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt="" onClick={()=> TvShowTitle(shows)} />
              <h3 id={shows.name.length > 23 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor' }>{shows.name}</h3>
              </div>
            </Fragment>
              )
      })}
      <AiOutlineClose id={toggle ? '' : ''} className={toggle ? 'DarkTheme' : 'LightThemeClose'}fontSize={55} color="#fff" cursor={'pointer'} onClick={()=> setTrailer(true)} />
      </div>
      </div>
    </Fragment>
  )
}

export default TvShows
