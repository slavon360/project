import React from 'react';
import Adj from '../Adj/AdjComponent';
import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Navigation/Footer';
//import classes from './Layout.css';

const layout = props => {
    return (
      <Adj>
        <Toolbar />
        <main>
          {props.children}
        </main>
        <Footer />
      </Adj>
    )
}

export default layout;
