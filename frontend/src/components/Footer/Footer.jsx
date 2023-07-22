import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {BsGithub ,BsInstagram,BsLinkedin,BsXOctagon} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
        <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>
        Experienced full stack Node.js developer skilled 
        in building scalable web applications. Proficient in
        React.js, Angular, and Node.js for front-end and back-end
        </Typography>

        <Link to="/contact" className="footerContactBtn">
            <Typography>Contact Us</Typography>
        </Link>
        </div>
         
        <div>
            <Typography variant='h6'>Social Media</Typography>
            <a href='https://github.com/AbhiPandit1' target='black'><BsGithub/></a>
            <a href='https://instagram.com/abhishek1008__' target='black'><BsInstagram/></a>
            <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BwYm1Tg4aSimmM8YJrN0rgw%3D%3D' target='black'><BsLinkedin/></a>
            <a href='https://leetcode.com/Abhishek_pandit/' target='black'><BsXOctagon/></a>
        </div>
      
    </div>
  )
}

export default Footer
