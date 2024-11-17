import React from 'react'
import tuGourmetLogo from '../../assets/logo/tuGourmetLogo.svg'
import './logo.css'

function Logo() {
  return ( 
    <img src={tuGourmetLogo} alt="Tu Gourmet logo" className='logo img-fluid'/>
  )
}

export default Logo