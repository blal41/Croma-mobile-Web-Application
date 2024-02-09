import React, { Fragment } from "react";
import classes from "./Mainfile.module.css";
import image from ".//4jpg.jpg";
import imge from './3jpg.jpg'
import { NavLink } from "react-router-dom";


function Mainfile() {
  return (
    <Fragment>
      <div className={classes.head}>
        <nav>
          <span>Phones and Wearables </span> {"  >  "}
          <span>
            <b>Mobile phones</b>
          </span>
          <h2>Mobile Phones</h2>
        </nav>
      </div>
      <div className={classes.images}>
        <NavLink to="/product">
        <img src={image} alt="not shows.." />

          <img src={imge} alt="not shows.." />
        </NavLink>
      </div>
      <div className={classes.para}>
        <h2>Treat yourself to a new Mobile Phone</h2>
        <p>
          Experience the world at your fingertips! Work, socialise, book a ride,
          play games, listen to music, watch your{" "}
        </p>
        <p>
          favourite shows, take a photo, or simply make a call! Buy a Mobile
          Phone from Croma that does it all and then some.
        </p>
      </div>
    
     
    </Fragment>
  );
}

export default Mainfile;
