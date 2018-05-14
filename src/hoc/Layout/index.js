import React, { Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Navigation/Footer';

class Layout extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: React.PropTypes.any,
};

export default Layout;
