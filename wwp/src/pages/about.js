import React from 'react';
import pic from '../images/about_us.webp';
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <img alt='Team-Triad' className='image' src={pic} width="350px" height="300px"/>
      
    </div>
  );
};

export default About;