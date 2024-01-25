import React, { Fragment } from 'react'
import classes from './Mainfile.module.css'
import image from './main_image.jpg';


function Mainfile() {
  return (
    <Fragment>
        <div className ={classes.head}>
          <p><span>Phones and Wearables </span> {'  >  ' }<span><b>Mobile phones</b></span> 
          <h2>Mobile Phones</h2></p>
        </div>
        <div className={classes.head1}>
            <img src={image} alt='not shows..' />
        </div>
    </Fragment>
  )
}

export default Mainfile ;