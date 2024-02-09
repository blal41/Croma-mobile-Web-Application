import React from 'react'
import classes from './Footer.module.css';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className={classes.footer}>
    <div className={classes.contact}>
      <h2>CONNECT WITH US </h2>
      <input
        type="email"
        placeholder="Enter Email ID"
        className={classes.input}
      />
      <ul className={classes.icon}>
        <li>
          <a
            href="https://www.instagram.com/b.l.seervi2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100076585852283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/babulal-seervi-7361aa24b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/blal41"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </li>
      </ul>
      <p>© Copyright 2023 PixelPulse. All </p> <p>rights reserved</p>
    </div>
    <div className={classes.useful_links}>
      <h2> ABOUT</h2>
      <ul className={classes.links}>
        <li>
          <NavLink to="/aboutus" className={classes.link}>About US</NavLink>
        </li>
        <li>
          <NavLink to="/desclaimer" className={classes.link}>Desclaimer</NavLink>
        </li>
        <li>
          <NavLink to="/faqs"className={classes.link}>Faqs</NavLink>
        </li>
       
      </ul>
    </div>
    <div className={classes.products}>
      <h2>CONSUMER POLICY</h2>
      <ul className={classes.links}>
        <li> 
          <NavLink to="/term-condition" className={classes.link}>Term and Conditions</NavLink>
        </li>
        <li>
          <NavLink to="/privacy-policy" className={classes.link}>Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink to="/security" className={classes.link}>Security</NavLink>
        </li>
      </ul>
    </div></div>
  )
}

export default Footer;