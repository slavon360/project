import React from 'react';
import Adj from '../Adj/AdjComponent';
import Toolbar from '../../components/Navigation/Toolbar';
//import classes from './Layout.css';

const layout = props => {
    return (
      <Adj>
        <Toolbar />
        <main>
          {props.children}
        </main>
      </Adj>
    )
}

export default layout;
