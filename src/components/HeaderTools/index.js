import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import BalanceIndicator from './BalanceIndicator';
import Dropdown from '../UI/Dropdown';
import Arrow from '../UI/Arrow';
import classes from './HeaderTools.css';
import i18n from '../../i18n';
import Eng from '../../../assets/images/icons/languages/Eng.png';
import Ukr from '../../../assets/images/icons/languages/Ukr.png';
import Rus from '../../../assets/images/icons/languages/Rus.png';
import Esp from '../../../assets/images/icons/languages/Esp.png';
import Deu from '../../../assets/images/icons/languages/Deu.png';

class HeaderTools extends Component {
  state = {
    balance: {
      cryptocurrency: { value: 2.156, type: 'BTC' },
      fiat: { value: 31025.35, type: 'AUD' },
    },
    user: {
      title: 'John Bravo',
      drpItems: [
        {
          title: <NavLink to="/profile">profile</NavLink>,
          checked: false,
        },
        {
          title: <NavLink to="/verification">verification</NavLink>,
          checked: false,
        },
        {
          title: <NavLink to="/logout">logout</NavLink>,
          checked: false,
        },
      ],
    },
    userDropdownOpen: false,
    langDropdownOpen: false,
    langItems: [
      { title: 'Eng', value: 'en', checked: false, icon: Eng },
      { title: 'Esp', value: 'es', checked: false, icon: Esp },
      { title: 'Рус', value: 'ru', checked: false, icon: Rus },
      { title: 'Deu', value: 'de', checked: false, icon: Deu },
      { title: 'Укр', value: 'ua', checked: false, icon: Ukr },
    ],
    currentLang: 'en',
  }

  hideShowUserDropdown = () => {
    this.setState(prevState => ({ userDropdownOpen: !prevState.userDropdownOpen }));
  }

  toggleLangDropdown = () => {
    this.setState(prevState => ({ langDropdownOpen: !prevState.langDropdownOpen }));
  }

  hideDropdown = (prop) => {
    this.setState({ [prop]: false });
  }

  selectLanguage = (val) => {
    this.setState({ currentLang: val.value });
    i18n.changeLanguage(val.value);
  }

  userParameter = () => {

  }

  render() {
    const cryptVal = this.state.balance.cryptocurrency.value;
    const cryptType = this.state.balance.cryptocurrency.type;
    const fiatVal = this.state.balance.fiat.value;
    const fiatType = this.state.balance.fiat.type;
    return (
      <div className={classes.HeaderToolsWrp}>
        <BalanceIndicator>
          <span>{cryptVal}</span><span style={{ fontWeight: '700' }}> {cryptType} </span>
          <span>/</span>
          <span> {fiatVal}</span><span style={{ fontWeight: '700' }}> {fiatType}</span>
        </BalanceIndicator>
        <Dropdown
          drpWrpClasses={['UserDropdownWrp']}
          drpContainerClasses={
            cx('DropdownUserContainer', { Show: this.state.userDropdownOpen, Hide: !this.state.userDropdownOpen }).split(' ')
          }
          dropdownTitle={'userDropdownOpen'}
          dropdownButtonClasses={['DropdownButtonUser']}
          dropdownButtons={this.state.user.drpItems}
          hideShowDropdown={this.hideShowUserDropdown}
          hideDropdown={this.hideDropdown}
          setValue={this.userParameter}
        >
          {this.state.user.title}<span className={classes.Arrow}><Arrow /></span>
        </Dropdown>
        <div className={classes.Help}>
          <NavLink
            to="/help"
          >
            Help
          </NavLink>
        </div>
        <Dropdown
          drpWrpClasses={['LangDropdownWrp']}
          drpContainerClasses={
            cx('DropdownLangContainer', { Show: this.state.langDropdownOpen, Hide: !this.state.langDropdownOpen }).split(' ')
          }
          dropdownTitle={'langDropdownOpen'}
          dropdownButtonClasses={['DropdownButtonLang']}
          dropdownButtons={this.state.langItems}
          hideShowDropdown={this.toggleLangDropdown}
          hideDropdown={this.hideDropdown}
          setValue={this.selectLanguage}
        >
          <div className={classes.SelectedLanguage}>
            <img
              alt={this.state.langItems.find(i => i.value === this.state.currentLang).title}
              src={this.state.langItems.find(i => i.value === this.state.currentLang).icon}
            />
            <span>
              {this.state.langItems.find(i => i.value === this.state.currentLang).title}
            </span>
            <span className={classes.Arrow}><Arrow /></span>
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default HeaderTools;
