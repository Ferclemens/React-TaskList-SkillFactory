import React from 'react'
import imgHeader from '../assets/todoListHeader.png'
import '../styles/Header.css'

function Header() {
  return (
    <div className='headerContainer'>
    <h1 className='headerTitle'>To do list</h1>
      {/* <img className='headerImg' src={imgHeader}/> */}
    </div>
  )
}

export default Header