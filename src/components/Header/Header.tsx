import React from 'react'
import headerStyles from './Header.module.css'

const Header = () => {

  return (
    <div>
      <div className={headerStyles.header}></div>
      <div className={headerStyles.logo} ></div>

    </div>
  )
}

export default Header