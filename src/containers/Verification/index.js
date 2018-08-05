import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { userData, dateData, nationalities } from '../../../dumpData.json';
import { propertiesExtractor } from '../../shared/utility';
// import BankAccount from '../../components/BankAccount';
import BankAccount2 from '../../components/BankAccount/BankAccount2';
import Address from '../../components/Address';
// import Address2 from '../../components/Address/Address2';
import UserDetails from '../../components/UserDetails';
import SideBarNav from '../../components/SideBarNav';
import Checked from '../../components/UI/Icons/Checked';
import exclamationImg from '../../../assets/images/icons/exclamation.png';
import classes from './Verification.css';

class Verification extends Component {
  state = {
    nationalities,
    relevantList: [],
    currentLang: null,
    userData,
    dateData,
    navBtns: null,
    selectedSection: null,
    dropdowns: [
      { title: 'months', show: false },
      { title: 'years', show: false },
      { title: 'days', show: false },
    ],
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
    if (this.props.i18n.language !== this.state.currentLang) {
      this.updateNavButtons(true);
    }
  }

  setUsersData = (event, dataKey) => {
    const updSelectedSection = { ...this.state.selectedSection };
    updSelectedSection[dataKey] = event.target.value;
    this.setState({ selectedSection: updSelectedSection });
  }

  setUsersNationality = (event, dataKey) => {
    const updSelectedSection = { ...this.state.selectedSection };
    const value = event.target.value;
    let updNationalities = [...this.state.nationalities];
    updNationalities = updNationalities.filter(nationality => nationality.includes(value));
    updSelectedSection[dataKey] = value;
    updNationalities = !value.length ? [] : updNationalities;
    global.console.log(updNationalities);
    this.setState({ selectedSection: updSelectedSection, relevantList: updNationalities });
  }

  pickNationality = (value) => {
    const updSelectedSection = { ...this.state.selectedSection };
    updSelectedSection.nationality = value;
    this.setState({ selectedSection: updSelectedSection, relevantList: [] });
  }

  hideNationalityList = () => {
    this.setState({ relevantList: [] });
    global.console.log(this.state);
  }

  setUsersGender = (dataKey) => {
    const updSelectedSection = { ...this.state.selectedSection };
    const keys = Object.keys(updSelectedSection.gender);
    keys.forEach((key) => { updSelectedSection.gender[key] = false; });
    updSelectedSection.gender[dataKey] = true;
    this.setState({ selectedSection: updSelectedSection });
  }

  setTypeOfSertificate = (dataKey) => {
    const updSelectedSection = { ...this.state.selectedSection };
    const keys = Object.keys(updSelectedSection.sertificateType);
    keys.forEach((key) => { updSelectedSection.sertificateType[key] = false; });
    updSelectedSection.sertificateType[dataKey] = true;
    this.setState({ selectedSection: updSelectedSection });
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

  hideShowDate = (key) => {
    let updDropdowns = [...this.state.dropdowns];
    updDropdowns = updDropdowns.map(drp => ({
      ...drp,
      show: drp.title === key ? !drp.show : false,
    }));
    this.setState({ dropdowns: updDropdowns });
  }

  hideDate = (key) => {
    let updDropdowns = [...this.state.dropdowns];
    updDropdowns = updDropdowns.map(drp => ({
      ...drp,
      show: drp.title === key ? false : drp.show,
    }));
    this.setState({ dropdowns: updDropdowns });
  }

  setUsersBirthDate = (date, key) => {
    const updatedUserData = { ...this.state.selectedSection };
    const pluralKey = `${key}s`;
    let dates = [...this.state[pluralKey]];
    dates = dates.map(d => ({
      ...d,
      checked: d.title === date.title,
    }));
    updatedUserData.birth[key] = date.title;
    this.setState({ selectedSection: updatedUserData, [pluralKey]: dates });
  }

  updateNavButtons = (onUpdate) => {
    let navBtns = [];
    if (onUpdate) {
      navBtns = this.state.navBtns;
    } else {
      const necessaryKeys = 'User details,Address,Bank';
      navBtns = propertiesExtractor(this.state.userData, necessaryKeys, [], true);
    }
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
    global.console.log(this.state);
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
            <BankAccount2
              bankAccount={this.state.selectedSection}
              setUsersData={this.setUsersData}
            />
          }
          { this.state.selectedSection.title === 'Address' &&
            <Address
              data={this.state.selectedSection}
              setUsersData={this.setUsersData}
            />
          }
          { this.state.selectedSection.title === 'User details' &&
            <UserDetails
              dropdowns={this.state.dropdowns}
              months={this.state.months}
              days={this.state.days}
              years={this.state.years}
              userDetails={this.state.selectedSection}
              hideShowDate={this.hideShowDate}
              hideDate={this.hideDate}
              setUsersData={this.setUsersData}
              setUsersGender={this.setUsersGender}
              setTypeOfSertificate={this.setTypeOfSertificate}
              setUsersBirthDate={this.setUsersBirthDate}
              setUsersNationality={this.setUsersNationality}
              relevantList={this.state.relevantList}
              pickNationality={this.pickNationality}
              hideNationalityList={this.hideNationalityList}
            />
          }
        </div>
      </div>
    );
  }
}


export default translate()(Verification);
