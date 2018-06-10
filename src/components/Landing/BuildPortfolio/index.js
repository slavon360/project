import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './BuildPortfolio.css';

const exchange = () => (
  <div className={classes.BuildPortfolioWrp}>
    <h2>Build Your Digital Portfolio!</h2>
    <div className={classes.Advantages}>
      With no hidden fees, transparent trading and a commitment to regulatory compliance,
 we are the <span>ideal platform for</span> building <span>your</span> digital portfolio
    </div>
    <div className={classes.CreateAccount}>
      <NavLink to="/sign-up" exact activeClassName={classes.active}>Create account</NavLink>
    </div>
  </div>
);

export default exchange;
