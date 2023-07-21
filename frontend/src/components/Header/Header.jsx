import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import logo from '../../Images/logo.png'
import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <ReactNavbar
    navColor1="white" navColor2="hsla(219, 49%, 12%)" 
    burgerColor="hsl(219,100%,75%)"
    burgerColorHover="hsl(250,100%,75%)"
    logo={logo}
    logowidth="250px"
    nav2justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contacts"
    link1ColorHover="white"
    link1Color="hsl(250,100%,75%)"
    link1Size="1.5rem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColor="HSL(250,100%,75%)"
    profileIconColorHover="white"


    
    />
  )
}

export default Header
