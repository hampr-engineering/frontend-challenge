import React from 'react'
import headerStyles from './Header.module.css'

const Header = () => {

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.background}></div>
      <div className={headerStyles.logo} ></div>

    </div>
  )
}

export default Header