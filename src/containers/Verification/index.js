import React, { Component } from 'react';
import { userData, dateData } from '../../../dumpData.json';
import { propertiesExtractor } from '../../shared/utility';
import BankAccount from '../../components/BankAccount';
import Address from '../../components/Address';
import UserDetails from '../../components/UserDetails';
import SideBarNav from '../../components/SideBarNav';
import Checked from '../../components/UI/Icons/Checked';
import exclamationImg from '../../../assets/images/icons/exclamation.png';
import classes from './Verification.css';

class Verification extends Component {
  state = {
    userData,
    dateData,
    navBtns: null,
    selectedSection: null,
  }
  switchSection = (sect) => {
    let updNavBtns = [...this.state.navBtns];
    updNavBtns = updNavBtns.map((nav) => {
      const updNav = { ...nav };
      if (nav.title === sect.title) {
        updNav.checked = true;
        this.setState({ selectedSection: updNav });
      } else {
        updNav.checked = false;
      }
      return updNav;
    });
    this.setState({ navBtns: updNavBtns });
  }
  componentWillMount() {
    const date = this.state.dateData;
    const birth = this.state.userData['User details'].birth;
    let navBtns = [];
    const months = Object.keys(date).map(key => ({
      title: key,
      checked: false,
    }));
    const days = birth.month && Array.from(new Array(date[birth.month].days))
      .reduce((acc, item, index, items) => [...acc, { title: items.length - index }], []);
    const currentYear = new Date().getFullYear();
    const maxAge = 120;
    const years = Array.from(new Array(maxAge))
      .reduce((acc, item, index) => [...acc, { title: currentYear - index }], []);
    global.console.log(months, days, years);
    const necessaryKeys = 'User details,Address,Bank';
    navBtns = propertiesExtractor(this.state.userData, necessaryKeys, [], true);
    const updNavBtns = navBtns.map((nav, index) => {
      if (nav.checked) {
        this.setState({ selectedSection: nav });
      }
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
      const updNav = { ...nav };
      updNav.content = content;
      return updNav;
    });
    this.setState({ navBtns: updNavBtns, months, days, years });
  }

  render() {
    return (
      <div className={classes.VerificationWrp}>
        <div className={classes.NavbarSection}>
          <h2 className={classes.Title}>Verification</h2>
          <SideBarNav
            navClass="VerificationNavBtn"
            items={this.state.navBtns}
            checkItem={this.switchSection}
          />
          <div className={classes.Note}>
            <div className={classes.Head}>
              <img alt="exclamation" src={exclamationImg} />
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
          { this.state.selectedSection.title === 'Bank' &&
            <BankAccount bankAccount={this.state.selectedSection} />
          }
          { this.state.selectedSection.title === 'Address' &&
            <Address data={this.state.selectedSection} />
          }
          { this.state.selectedSection.title === 'User details' &&
            <UserDetails
              months={this.state.months}
              days={this.state.days}
              years={this.state.years}
              userDetails={this.state.selectedSection}
            />
          }
        </div>
      </div>
    );
  }
}


export default Verification;
