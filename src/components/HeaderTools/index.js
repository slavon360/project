import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BalanceIndicator from './BalanceIndicator';
import Dropdown from '../UI/Dropdown';
import Arrow from '../UI/Arrow';
import classes from './HeaderTools.css';

class HeaderTools extends Component {
    state = {
      balance: {
        cryptocurrency: {value: 2.156, type: 'BTC'},
        fiat: {value: 31025.35, type: 'AUD'}
      },
      user: {
              title: 'John Bravo',
              showDpDwn: false,
              drpItems: [{title: 'profile', checked: false}, {title: 'verification', checked: false}, {title: 'logout', checked: false}]
            },
      languages: {
              title: 'Eng',
              showDpDwn: false,
              icon: require(`../../../assets/images/icons/languages/Eng.png`),
              drpItems: [
                {title: 'Eng', checked: false, icon: require(`../../../assets/images/icons/languages/Eng.png`)},
                {title: 'Esp', checked: false, icon: require(`../../../assets/images/icons/languages/Esp.png`)},
                {title: 'Deu', checked: false, icon: require(`../../../assets/images/icons/languages/Deu.png`)},
                {title: 'Рус', checked: false, icon: require(`../../../assets/images/icons/languages/Рус.png`)},
                {title: 'Укр', checked: false, icon: require(`../../../assets/images/icons/languages/Укр.png`)}
              ]
      }
    }
    hideShowUserDropdown = () => {
      let updUser = {...this.state.user};
      updUser.showDpDwn = updUser.showDpDwn ? false : true;
      this.setState({user: updUser});
    }
    hideShowLangDropdown = () => {
      let updLanguages = {...this.state.languages};
      updLanguages.showDpDwn = updLanguages.showDpDwn ? false : true;
      this.setState({languages: updLanguages});
    }
    hideLangDropdown = () => {
      let updLanguages = {...this.state.languages};
      updLanguages.showDpDwn = false;
      this.setState({languages: updLanguages});
    }
    hideUserDropdown = () => {
      let updUser = {...this.state.user};
      updUser.showDpDwn = false;
      this.setState({user: updUser});
    }
    selectLanguage = () => {

    }
    userParameter = () => {

    }
    render(){
      let userContainerClasses = this.state.user.showDpDwn ? ['DropdownUserContainer', 'Show'] : ['DropdownUserContainer', 'Hide'];
      let langContainerClasses = this.state.languages.showDpDwn ? ['DropdownLangContainer', 'Show'] : ['DropdownLangContainer', 'Hide'];
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
            dropdownButtons={this.state.languages.drpItems}
            hideShowDropdown={this.hideShowLangDropdown}
            hideDropdown={this.hideLangDropdown}
            setValue={this.selectLanguage}>
              <div className={classes.SelectedLanguage}>
                <img alt={this.state.languages.title} src={this.state.languages.icon} />
                <span>{this.state.languages.title}</span>
                <span className={classes.Arrow}><Arrow/></span>
              </div>
          </Dropdown>
        </div>
      )
    }
}

export default HeaderTools;
