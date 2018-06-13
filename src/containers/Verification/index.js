import React, { Component } from 'react';
import { translate } from 'react-i18next';
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
    currentLang: null,
    userData,
    dateData,
    navBtns: null,
    selectedSection: null,
  }

  componentWillMount() {
    const date = this.state.dateData;
    const birth = this.state.userData['User details'].birth;
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
    this.updateNavButtons();
    this.setState({ months, days, years });
  }

  componentDidUpdate() {
    global.console.log(this.props.i18n, this.state);
    if (this.props.i18n.language !== this.state.currentLang) {
      this.updateNavButtons();
      global.console.log(this.props);
    }
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

  hideShowDate = () => {}

  updateNavButtons = () => {
    let navBtns = [];
    const necessaryKeys = 'User details,Address,Bank';
    navBtns = propertiesExtractor(this.state.userData, necessaryKeys, [], true);
    const updNavBtns = navBtns.map((nav, index) => {
      if (nav.checked) {
        this.setState({ selectedSection: nav });
      }
      const borderTextColor = nav.verified ? '#6bcc00' : '#c6c6c6';
      const content = (
        <div className={classes.NavBtn}>
          <div style={{ color: borderTextColor, borderColor: borderTextColor }}>
            {index + 1}
          </div>
          <div>
            <div>{nav.title}</div>
            {nav.verified ?
              <div style={{ color: '#6bcc00' }}>
                {this.props.t('status.verified')}
                <Checked
                  styles={{ width: '8px', height: '7px', fill: '#6bcc00', marginLeft: '8px' }}
                />
              </div>
              : null
            }
            {nav.isBeingVerified &&
              <div style={{ color: '#627eea' }}>{this.props.t('status.isBeingVerified')}</div>
            }
            {nav.notVerified &&
              <div style={{ color: '#e76071' }}>{this.props.t('status.notVerified')}</div>
            }
          </div>
        </div>
      );
      const updNav = { ...nav };
      updNav.content = content;
      return updNav;
    });
    this.setState({ navBtns: updNavBtns, currentLang: this.props.i18n.language });
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
              hideShowDate={this.hideShowDate}
            />
          }
        </div>
      </div>
    );
  }
}


export default translate()(Verification);
