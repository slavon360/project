import React from 'react';
import Adj from '../Adj/AdjComponent';
import classes from './Layout.css';

const layout = props => {
    return (
      <Adj>
        <main>
          {props.children}
        </main>
      </Adj>
    )
}

export default layout;
