import React from "react";
import classes from "./Mainheader.module.css";
import { NavLink } from "react-router-dom";

function Mainheader() {
  return (
    <nav className={classes.navbaritems}>
      <h1 className={classes.logo}>CROMA</h1>

      <ul className={classes.nav_menu}>
        <li><NavLink to="/" className={classes.custom_link}>Home</NavLink></li>
        <li><NavLink to="/product" className={classes.custom_link}>Product</NavLink></li>
        <li><NavLink to="/cart" className={classes.custom_link}>Cart</NavLink></li>
      </ul>
    </nav>
  );
}

export default Mainheader;
