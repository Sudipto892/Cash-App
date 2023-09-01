import React ,{useState} from 'react'
import "./Navbar.css"

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbox">
        <div className="navbar">
        <div className={`menu-icon ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
            <ul  className={`nav-links ${isMenuOpen ? 'open' : 'close'}`}>
                <li>SIGN IN</li>
                <li>LEGAL</li>
                <li>LICENSES</li>
                <li>SECURITY</li>
                <li>CAREERS</li>
                <li>PRESS</li>
                <li>SUPPORT</li>
                <li>STATUS</li>
                <li>CODEBLOG</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
