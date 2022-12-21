import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import { Routes,Route, NavLink } from 'react-router-dom'
import '../Styles/NavBarStyles.css'
import Movies from './Movies'
import Pricing from './Pricing'
import Trends from './Trends'
import TvShows from './TvShows'

export const Container = React.createContext()
function NavBar() {
    const [toggle,setToggle]=useState(true)
    const [inputValue, setInputValue]=useState('')
  return (
    <Container.Provider value={{toggle, inputValue}}>
    <Fragment>
        <nav className={toggle ? '' : 'navBarColor'}>
            <div className="nav-options">
                <h1 id={toggle ? '' : 'heading'}>MOVIEFLIX</h1>
                <NavLink to="" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}> 
                <span id={toggle ? 'Movies': 'MoviesLight'}>Movies</span>
                </NavLink>
                <NavLink to="/tvshows" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies': 'MoviesLight'}>Tv Shows</span>
                </NavLink>
                <NavLink to="/trending" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies': 'MoviesLight'}>Trending</span>
                </NavLink>
                <NavLink to="price" style={({isActive})=>{return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies': 'MoviesLight'}>Pricing</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Search Whatever you like!' onChange={(e) => setInputValue(e.target.value)} />
            <HiSearch fontSize={21} color="black" id='search' />
            <div id="Color-switcher" onClick={()=> setToggle(!toggle)}>
            <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
            </div>
            </nav>
            <Routes>
                <Route path='' element={<Movies/>} />
                <Route path='/tvshows' element={<TvShows/>} />
                <Route path='/trending' element={<Trends/>} />
                <Route path='/price' element={<Pricing/>} />
            </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default NavBar
