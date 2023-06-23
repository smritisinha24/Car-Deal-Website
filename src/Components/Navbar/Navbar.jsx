import React, {useState} from 'react'
import './Navbar.css'

// Imported Images
import logo from '../../image/logo1.png'

// Imported Icons
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/Tb'

const Navbar = () => {

  //statement to hold the navbar state
  const [navbar, setNavbar] = useState('navbar')

  // fn to show navbar on smaller width screens
  const showNavbar = ()=> {
    setNavbar('navbar showNavbar')
  }

  // fn to remove navbar on smaller width screens
  const removeNavbar = ()=> {
    setNavbar('navbar')
  }

  // fn to add bg color to navbar when we scroll a certain height on the window
  const [header, setHeader] = useState('header')
  const addBg =()=> {
    if(window.scrollY >= 20){
      setHeader('header addBg')
    }
  }
  window.addEventListener('scroll',addBg);



  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="Logo Image" className='logo'/>
      </div>

      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">Used Cars</a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">New Cars</a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">Auctions</a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">Sellers</a>
          </li>
        </ul>

        {/* Icon that will close the navbar on small screens */}
        <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>         
      </div>
      
      <div className="signUp flex">
        <div className="text">Sign Up</div>
        {/* Icon that will open/show the navbar on small screens */}
        <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>         
      </div>
    </div>
  )
}

export default Navbar