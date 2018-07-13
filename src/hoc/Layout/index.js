import React, { Fragment } from 'react';
// import Toolbar from '../../components/Navigation/Toolbar';
// import Footer from '../../components/Navigation/Footer';
// import SideDrawer from '../../components/Navigation/SideDrawer';

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
      return (
        <Fragment>
          <main>
            {this.props.children}
          </main>
        </Fragment>
      );
    }
}

export default Layout;
