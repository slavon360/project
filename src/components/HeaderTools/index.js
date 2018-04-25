import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import BalanceIndicator from './BalanceIndicator';
import Dropdown from '../UI/Dropdown';
import Arrow from '../UI/Arrow';
import classes from './HeaderTools.css';

class HeaderTools extends Component {
    state = {
      user: {
              title: 'John Bravo',
              showDpDwn: false,
              drpItems: [{title: 'profile', checked: false}, {title: 'verification', checked: false}, {title: 'logout', checked: false}]
            },
      languages: {
              title: 'Eng',
              showDpDwn: false,
              icon: require(`../../assets/images/icons/languages/Eng.png`),
              drpItems: [
                {title: 'Eng', checked: false, icon: require(`../../assets/images/icons/languages/Eng.png`)},
                {title: 'Esp', checked: false, icon: require(`../../assets/images/icons/languages/Esp.png`)},
                {title: 'Deu', checked: false, icon: require(`../../assets/images/icons/languages/Deu.png`)},
                {title: 'Рус', checked: false, icon: require(`../../assets/images/icons/languages/Рус.png`)},
                {title: 'Укр', checked: false, icon: require(`../../assets/images/icons/languages/Укр.png`)}
              ]
      }
    }
    render(){
      let userContainerClasses = this.state.user.showDpDwn ? ['DropdownUserContainer'] : ['DropdownUserContainer'];
      let langContainerClasses = this.state.languages.showDpDwn ? ['DropdownLangContainer'] : ['DropdownLangContainer'];
      return(
        <div className={classes.HeaderToolsWrp}>
          {/*<BalanceIndicator />*/}
          <Dropdown
            drpWrpClasses={['UserDropdownWrp']}
            drpContainerClasses={userContainerClasses}
            dropdownButtonClasses={['DropdownButtonUser']}
            dropdownButtons={this.state.user.drpItems}
            activeBtn="ActiveUserDpdwnButton"
            inactiveBtn="InactiveUserDpdwnButton">
            {this.state.user.title}<span className={classes.Arrow}><Arrow/></span>
          </Dropdown>
          <div className={classes.Help}>
            <NavLink
              to="/help"
              activeClassName={classes.active}>
              Help
            </NavLink>
          </div>
          <Dropdown
            drpWrpClasses={['LangDropdownWrp']}
            drpContainerClasses={langContainerClasses}
            dropdownButtonClasses={['DropdownButtonLang']}
            dropdownButtons={this.state.languages.drpItems}
            activeBtn="ActiveUserDpdwnButton"
            inactiveBtn="InactiveUserDpdwnButton">
              <div className={classes.SelectedLanguage}>
                <img src={this.state.languages.icon} />
                <span>{this.state.languages.title}</span>
                <span className={classes.Arrow}><Arrow/></span>
              </div>
          </Dropdown>
        </div>
      )
    }
}

export default HeaderTools;
