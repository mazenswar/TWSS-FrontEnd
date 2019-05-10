/* eslint-disable max-len */
// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import emma from '../../Assets/Emma.svg';

const HomeAbout = () => (
  <div className="index-about">
    <div className="home-logo-div">
      <img src={emma} alt="" />
    </div>

    <div className="home-about-subdiv">
      <h1> About The Project </h1>
      <p>
        A platform to celebrate and discuss the conrtibutions of women who made
        the world a better place
      </p>
    </div>

    <div className="landing-links-div">
      <Link to="/women" className="landing-link">
        Women
      </Link>
      <Link to="/posts" className="landing-link">
        Posts
      </Link>
    </div>
  </div>
);

export default HomeAbout;
