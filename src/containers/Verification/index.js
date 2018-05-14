import React, { Component } from 'react';
import { userData } from '../../../dumpData.json';
import { propertiesExtractor } from '../../shared/utility';
import BankAccount from '../../components/BankAccount';
import SideBarNav from '../../components/SideBarNav';
import Checked from '../../components/UI/Icons/Checked';
import classes from './Verification.css';

class Verification extends Component {
  state = {
    userData,
    navBtns: null,
    selectedSection: null,
  }

  componentWillMount() {
    let navBtns = [];
    const necessaryKeys = 'User details,Address,Bank';
    navBtns = propertiesExtractor(this.state.userData, necessaryKeys, [], true);
    const updNavBtns = navBtns.map((nav, index) => {
      nav.checked && this.setState({ selectedSection: nav });
      const borderTextColor = nav.status === 'Verified' ? '#6bcc00' : '#c6c6c6';
      const content = (
        <div className={classes.NavBtn}>
          <div style={{ color: borderTextColor, borderColor: borderTextColor }}>
            {index + 1}
          </div>
          <div>
            <div>{nav.title}</div>
            {nav.status === 'Verified' ?
              <div style={{ color: '#6bcc00' }}>
                {nav.status}
                <Checked
                  styles={{ width: '8px', height: '7px', fill: '#6bcc00', marginLeft: '8px' }}
                />
              </div>
              : null
            }
            {nav.status === 'Is being verified' &&
              <div style={{ color: '#627eea' }}>{nav.status}</div>
            }
            {nav.status === 'Not verified' &&
              <div style={{ color: '#e76071' }}>{nav.status}</div>
            }
          </div>
        </div>
      );
      nav.content = content;
      return nav;
    });
    this.setState({ navBtns: updNavBtns });
  }

  render() {
    let content;
    let selectedSectionTitle = this.state.selectedSection.title;
    selectedSectionTitle === 'Bank' && (content = <BankAccount bankAccount={this.state.selectedSection} />);
    return (
      <div className={classes.VerificationWrp}>
        <div className={classes.NavbarSection}>
          <h2 className={classes.Title}>Verification</h2>
          <SideBarNav navClass="VerificationNavBtn" items={this.state.navBtns} />
          <div className={classes.Note}>
            <div className={classes.Head}>
              <img src={require('../../../assets/images/icons/exclamation.png')} />
              <div className={classes.NoteTitle}>Important!</div>
            </div>
            <div className={classes.Text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In ac ex auctor nunc aliquet venenatis eu facilisis ipsum.
              Phasellus non lobortis massa, in tempor nunc.
              Cras sed orci id quam viverra euismod vitae et ligula.
              Nulla suscipit auctor mi non venenatis.
              Phasellus odio tortor, luctus vel diam ac, iaculis dignissim velit.
            </div>
          </div>
        </div>
        <div className={classes.Content}>
          {content}
        </div>
      </div>
    );
  }
}


export default Verification;
