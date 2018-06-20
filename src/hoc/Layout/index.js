import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Navigation/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer';

class Layout extends React.PureComponent {
  state = {
    showSideDrawer: false,
  }
    sideDrawerClosedHandler = () => {
      this.setState({
        showSideDrawer: false,
      });
    }
    sideDrawerToggleHandler = () => {
      this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
    }
    render() {
      global.console.log(this.props);
      return (
        <Fragment>
          <Toolbar
            drawerToggleClicked={this.sideDrawerToggleHandler}
          />
          <SideDrawer
            open={this.state.showSideDrawer}
            closeSideDrawer={this.sideDrawerClosedHandler}
          />
          <main>
            {this.props.children}
          </main>
          <Footer />
        </Fragment>
      );
    }
}

export default Layout;
