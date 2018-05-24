import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BalanceIndicator from './BalanceIndicator';
import Dropdown from '../UI/Dropdown';
import Arrow from '../UI/Arrow';
import classes from './HeaderTools.css';
import i18n from '../../i18n';

class HeaderTools extends Component {
  state = {
    balance: {
      cryptocurrency: { value: 2.156, type: 'BTC' },
      fiat: { value: 31025.35, type: 'AUD' }
    },
    user: {
      title: 'John Bravo',
      showDpDwn: false,
      drpItems: [
        {
          title: <NavLink to="/profile">profile</NavLink>,
          checked: false
        },
        {
          title: <NavLink to="/verification">verification</NavLink>,
          checked: false
        },
        {
          title: <NavLink to="/logout">logout</NavLink>,
          checked: false
        }
      ]
    },
    langDropdownOpen: false,
    langItems: [
      {title: 'Eng', value: 'en', checked: false, icon: require(`../../../assets/images/icons/languages/Eng.png`)},
      {title: 'Esp', value: 'es', checked: false, icon: require(`../../../assets/images/icons/languages/Esp.png`)},
      {title: 'Рус', value: 'ru', checked: false, icon: require(`../../../assets/images/icons/languages/Рус.png`)},
      {title: 'Deu', value: 'de', checked: false, icon: require(`../../../assets/images/icons/languages/Deu.png`)},
      {title: 'Укр', value: 'ua', checked: false, icon: require(`../../../assets/images/icons/languages/Укр.png`)}
    ],
    currentLang: 'en',
  }

  hideShowUserDropdown = () => {
    let updUser = {...this.state.user};
    updUser.showDpDwn = updUser.showDpDwn ? false : true;
    this.setState({user: updUser});
  }

  toggleLangDropdown = () => {
    this.setState({ langDropdownOpen: !this.state.langDropdownOpen });
  }

  hideUserDropdown = () => {
    let updUser = {...this.state.user};
    updUser.showDpDwn = false;
    this.setState({user: updUser});
  }

  selectLanguage = (val) => {
    this.setState({ currentLang: val.value });
    i18n.changeLanguage(val.value);
  }

  userParameter = () => {

  }

  render() {
    let userContainerClasses = this.state.user.showDpDwn ? ['DropdownUserContainer', 'Show'] : ['DropdownUserContainer', 'Hide'];
    let langContainerClasses = this.state.langDropdownOpen ? ['DropdownLangContainer', 'Show'] : ['DropdownLangContainer', 'Hide'];
    let cryptVal = this.state.balance.cryptocurrency.value, cryptType = this.state.balance.cryptocurrency.type,
        fiatVal = this.state.balance.fiat.value, fiatType = this.state.balance.fiat.type;
    return(
      <div className={classes.HeaderToolsWrp}>
        <BalanceIndicator>
          <span>{cryptVal}</span><span style={{fontWeight: '700'}}> {cryptType} </span> /
          <span> {fiatVal}</span><span style={{fontWeight: '700'}}> {fiatType}</span>
        </BalanceIndicator>
        <Dropdown
          drpWrpClasses={['UserDropdownWrp']}
          drpContainerClasses={userContainerClasses}
          dropdownButtonClasses={['DropdownButtonUser']}
          dropdownButtons={this.state.user.drpItems}
          hideShowDropdown={this.hideShowUserDropdown}
          hideDropdown={this.hideUserDropdown}
          setValue={this.userParameter}>
          {this.state.user.title}<span className={classes.Arrow}><Arrow/></span>
        </Dropdown>
        <div className={classes.Help}>
          <NavLink
            to="/help">
            Help
          </NavLink>
        </div>
        <Dropdown
          drpWrpClasses={['LangDropdownWrp']}
          drpContainerClasses={langContainerClasses}
          dropdownButtonClasses={['DropdownButtonLang']}
          dropdownButtons={this.state.langItems}
          hideShowDropdown={this.toggleLangDropdown}
          hideDropdown={this.toggleLangDropdown}
          setValue={this.selectLanguage}>
            <div className={classes.SelectedLanguage}>
              <img
                alt={this.state.langItems.find(i => i.value === this.state.currentLang ).title}
                src={this.state.langItems.find(i => i.value === this.state.currentLang ).icon}
              />
              <span>
                {this.state.langItems.find(i => i.value === this.state.currentLang ).title}
              </span>
              <span className={classes.Arrow}><Arrow/></span>
            </div>
        </Dropdown>
      </div>
    )
  }
}

export default HeaderTools;
