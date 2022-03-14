import React from 'react'
import './header.css'
const Header = () => {
  return (
    <>
      <span className="header" onClick={() => window.scroll(0, 0)}>
        🎬 Movies now 🎧
      </span>
    </>
  )
}

export default Header
