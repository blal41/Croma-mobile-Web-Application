import React, { Fragment } from 'react'
import Mainheader from './Mainheader';
import Footer from '../Footer/Footer';

function Layout(props) {
  return (
    <Fragment>
        <Mainheader />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout