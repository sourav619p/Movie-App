import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle,AiOutlineClose} from 'react-icons/ai'
import NoImg from './NoImage.jpg';
import { Container } from './NavBar';
import '../Styles/Videos.css'

function Trends() {
  const {toggle, inputValue} = useContext(Container)
  const [trendArray,setTrendArray]=useState([])
  const [trailer,setTrailer]= useState(true)
  const [trendTitle,setTrendTitle]=useState('')
  const Api ='https://api.themoviedb.org/3'
  const TrendsShown = '/trending/all/week'
  const Images = "https://image.tmdb.org/t/p/w500/"
  const Trends = async()=>{
    const data = await axios.get(`${Api}${TrendsShown}`,{
      params:{
        api_key: '911faf4d217a1906ddd69c7cc01f31cc',
      }
    })
    const results = data.data.results
    setTrendArray(results)
  }
  useEffect(() => {
    Trends()
  },[])
  const TrendTitle =(trend)=>{
    setTrendTitle(trend.title)
    setTrendTitle(!trailer)
  }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className='movies-container'>
        {trendArray.map((trend)=>{
          return(
            <Fragment>
       <div id={trailer ? 'container' : 'NoContainer'}>
      <AiFillPlayCircle color='green' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={()=> TrendTitle(trend)} /> 
      <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg } alt=''onClick={()=> TrendTitle(trend)} />
      <h3 id='smaller-Text' className={toggle ? 'mainColor' : 'secondaryColor' }>{trend.name}{trend.title}</h3>
      </div>
      </Fragment>
          )
        })}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'}fontSize={55} color="#fff" cursor={'pointer'} onClick={()=> setTrailer(true)} />
      </div>
      </div>
    </Fragment>
  )
}

export default Trends
