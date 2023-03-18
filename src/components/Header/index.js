import {Link} from 'react-router-dom'

// bug-8 => Home link is assigned to wrong path , We should change that path
// bug-9 => About link is assigned to wrong path , We should change that path
// bug-10 => Contact link is assigned to wrong path , We should change that path

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
        <Link className="route-link" to="/about">
          About
        </Link>
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
