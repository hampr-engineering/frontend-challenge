import * as React from 'react'
import './LogoHeader.css'
import headerLogo from '../../img/Mortal-Kombat-Logo.png'

const LogoHeader = () => {
  return (
    <div className='header-container'>
      <img src={headerLogo} className='header-logo' />
    </div>
  )
}

export default LogoHeader
