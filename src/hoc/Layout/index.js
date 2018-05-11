import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Navigation/Footer';
//import classes from './Layout.css';

const layout = props => {
    return (
      <Fragment>
        <Toolbar />
        <main>
          {props.children}
        </main>
        <Footer />
      </Fragment>
    )
}

export default layout;
