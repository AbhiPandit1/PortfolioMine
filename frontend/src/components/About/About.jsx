import React from 'react';
import './About.css';
import { Typography } from '@mui/material';
import Abhi from './Abhi.JPG';

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a sample quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={Abhi} alt="Abhi" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{ margin: '1vmax 0', color: 'black' }}
          >
            Abhishek
          </Typography>
          <Typography style={{ margin: '1vmax 0' }}>
            FULL STACK DEVELOPER
          </Typography>
          <Typography style={{ margin: '1vmax 0' }}>
            I am a Developer
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: '5px',
              lineHeight: '50px',
              letterSpacing: '5px',
              textAlign: 'right',
            }}
          >
            Being a versatile Full Stack Developer, I create innovative web apps
            while driven by algorithmic brilliance as a Competitive Programmer.{' '}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
