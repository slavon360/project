import React, { Component } from 'react';
import Header from '../../components/Landing/Header';
import Footer from '../../components/Landing/Footer';
import Intro from '../../components/Landing/Intro';
import WhyUse from '../../components/Landing/WhyUse';
import Exchange from '../../components/Landing/Exchange';
import BuildPortfolio from '../../components/Landing/BuildPortfolio';
import classes from './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className={classes.LandingWrp}>
        <div className={classes.Head}>
          <Header />
          <Intro />
        </div>
        <WhyUse />
        <Exchange />
        <div className={classes.Footer}>
          <BuildPortfolio />
          <Footer />
        </div>
      </div>);
  }
}

export default Landing;
