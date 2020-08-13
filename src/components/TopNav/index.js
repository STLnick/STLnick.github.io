import React from 'react'
import { Link } from 'react-router-dom'

export const TopNav = () => {

  return (
    <nav>
      <div className="nav-left">
        <img src="" alt="" />
        <h3>Nick Ray</h3>
      </div>
      <div className="nav-right">
        <ul>
          <li className="nav-link">
            <Link>Home</Link>
          </li>
          <li className="nav-link">
            <Link>About</Link>
          </li>
          <li className="nav-link">
            <Link>Portfolio</Link>
          </li>
          <li className="nav-link">
            <Link>Blog</Link>
          </li>
          <li className="nav-link">
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
