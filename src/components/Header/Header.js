import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone, AiOutlineProfile } from 'react-icons/ai'
import { FaTimes, FaBars } from 'react-icons/fa'

const Header = () => {
  const [toggle, isToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logo">
          <span>DucAnh</span>
        </Link>
        <div className={toggle? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <AiOutlineHome className="nav-icon" /> 
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <AiOutlineUser className="nav-icon" />
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                <AiOutlineProfile className="nav-icon" />
                <span>Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <AiOutlinePhone className="nav-icon" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <FaTimes className='nav-close' onClick={() => isToggle(!toggle)}/>
        </div>
        <div className="nav-toggle" onClick={() => isToggle(!toggle)}>
          <FaBars />
        </div>
      </nav>
    </header>
  )
}

export default Header