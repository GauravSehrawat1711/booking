import React from 'react'
import "./NavBarHome.css"

export const NavBarHome = () => {
  return (
    <div className='Navbar-container'>
        <div className='innerContainer'>
        <span className='Name'>Book Your Stay</span>
        <div className='Buttons'>
   <button className='NavButton'>Register</button>
   <button  className='NavButton'>Login</button>
        </div>
    </div>
    </div>
  )
}
