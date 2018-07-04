import React, { Component } from 'react';
import { landingData } from '../../../dumpData.json';
import Header from '../../components/Landing/Header';
import Footer from '../../components/Landing/Footer';
import Intro from '../../components/Landing/Intro';
import WhyUse from '../../components/Landing/WhyUse';
import Exchange from '../../components/Landing/Exchange';
import BuildPortfolio from '../../components/Landing/BuildPortfolio';
import LandingTopSvg from '../../../assets/images/backgrounds/landing-top.svg';
// import LandingTopBackground from '../../../assets/images/backgrounds/landing_top-background.png';
import LandingBottomBackground from '../../../assets/images/backgrounds/landing-bottom.svg';
import classes from './Landing.css';

class Landing extends Component {
  state = {
    landingData,
    checkedTab: null,
    tabs: null,
  }
  componentWillMount() {
    if (landingData && landingData.checkedTab) {
      this.setState({ checkedTab: landingData.checkedTab });
    }
    if (landingData && landingData.tabs) {
      this.setState({ tabs: landingData.tabs });
    }
  }
  onChangeImage = (step) => {
    const updCheckedTab = { ...this.state.checkedTab };
    let updSteps = updCheckedTab.steps.slice();
    updSteps = updSteps.map(s => ({
      ...s,
      checked: step.title === s.title,
    }));
    updCheckedTab.steps = updSteps;
    updCheckedTab.checkedStep = step.title;
    updCheckedTab.className = step.className;
    this.setState({ checkedTab: updCheckedTab });
  }
  render() {
    return (
      <div className={classes.LandingWrp}>
        <img className={classes.TopBackgroundSVG} src={LandingTopSvg} alt="top background" />
        <Header proportions={{ currencies: 'BTC / ETC', value: '223.649' }} />
        <Intro />
        <WhyUse tabs={this.state.tabs} />
        <Exchange
          checkedTab={this.state.checkedTab}
          changeImage={this.onChangeImage}
        />
        <div className={classes.Footer}>
          <BuildPortfolio />
          <Footer
            proportions={{
              proportionBtcKey: 'BTC / USD',
              proportionBtcValue: '2654.35',
              proportionEthKey: 'ETH / USD',
              proportionEthValue: '658.47',
            }}
          />
        </div>
        <img className={classes.BottomBackgroundSVG} src={LandingBottomBackground} alt="bottom background" />
      </div>);
  }
}

export default Landing;
