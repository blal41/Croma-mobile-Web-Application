import React, { Fragment } from 'react'
import Mainheader from './Mainheader'

function Layout(props) {
  return (
    <Fragment>
        <Mainheader />
        <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout