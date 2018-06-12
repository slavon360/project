import React, { Component } from 'react';
import { landingData } from '../../../dumpData.json';
import Header from '../../components/Landing/Header';
import Footer from '../../components/Landing/Footer';
import Intro from '../../components/Landing/Intro';
import WhyUse from '../../components/Landing/WhyUse';
import Exchange from '../../components/Landing/Exchange';
import BuildPortfolio from '../../components/Landing/BuildPortfolio';
import LandingTopBackground from '../../../assets/images/backgrounds/landing_top-background.png';
import LandingBottomBackground from '../../../assets/images/backgrounds/landing_bottom-background.png';
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
  onChangeImage = (tab) => {
    let updTabs = this.state.tabs.slice();
    updTabs = updTabs.map(t => ({
      ...t,
      checked: tab.title === t.title,
    }));
    this.setState({ tabs: updTabs, checkedTab: tab });
  }
  render() {
    return (
      <div className={classes.LandingWrp} style={{ backgroundImage: `url(${LandingTopBackground})` }}>
        <Header proportions={{ currencies: 'BTC / ETC', value: '223.649' }} />
        <Intro />
        <WhyUse
          tabs={this.state.tabs}
          changeImage={this.onChangeImage}
        />
        <Exchange checkedTab={this.state.checkedTab} />
        <div className={classes.Footer} style={{ backgroundImage: `url(${LandingBottomBackground})` }}>
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
      </div>);
  }
}

export default Landing;
