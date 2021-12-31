import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss' 


const Navbar = () => {
  return (
    <div className={s.container}>
      <nav>
        {/* <div className={s.navItem}>
          <NavLink to={`/pulsar`} style={{ color: 'white', textDecoration: 'none'}}>Pulsar</NavLink>
        </div> */}
        {/* <div className={s.navItem}>
          <NavLink to={`/outline`} style={{color: 'white', textDecoration: 'none'}}>Outline</NavLink>
        </div> */}
        {/* <div className={s.navItem}>
          <NavLink to={`/tree`} style={{color: 'white', textDecoration: 'none'}}>Tree</NavLink>
        </div> */}
        {/* <div className={s.navItem}>
          <NavLink to={`/chess`} style={{color: 'white', textDecoration: 'none'}}>Chess</NavLink>
        </div> */}
        <div className={s.navItem}>
          <NavLink to={`/sinewave`} style={{color: 'white', textDecoration: 'none'}}>Sinewave</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to={`/sunflower`} style={{color: 'white', textDecoration: 'none'}}>Sunflower</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to={`/landscape`} style={{color: 'white', textDecoration: 'none'}}>Landscape</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
