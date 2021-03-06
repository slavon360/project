import React from 'react';
import cx from 'classnames';
import Button from '../../UI/Button';
import Dropdown from '../../UI/Dropdown';
import Input from '../../UI/Input';
import ArrowIcon from '../../UI/Arrow';
import EngIcon from '../../../../assets/images/icons/languages/Eng.png';
import EspIcon from '../../../../assets/images/icons/languages/Esp.png';
import DeuIcon from '../../../../assets/images/icons/languages/Deu.png';
import UkrIcon from '../../../../assets/images/icons/languages/Ukr.png';
import classes from './SMSAuthenticator.css';

const smsAuth = props => (
  <div className={classes.SMSAuthWrp}>
    <h2>Enable SMS authenticator</h2>
    <form className={classes.AuthentificationForm}>
      <div className={classes.PhoneText}>Phone number:</div>
      <Dropdown
        hideShowDropdown={props.hideShowPhoneNumbers}
        hideDropdown={props.hidePhoneNumbers}
        elementConfig={{ type: 'button' }}
        drpWrpClasses={['PhoneNumberAuthentDropdownWrp']}
        dropdownButtonClasses={['PhoneNumberAuthentDropdownButton']}
        drpContainerClasses={cx('PhoneNumberAuthentContainer', { Show: props.showPhoneNumbers, Hide: !props.showPhoneNumbers }).split(' ')}
        dropdownButtons={[{ title: '+2', icon: EspIcon }, { title: '+3', icon: DeuIcon }, { title: '+4', icon: UkrIcon }]}
      >
        <div className={classes.DropdownConent}>
          <div><img src={EngIcon} alt="eng" /></div>
          <div>+1</div>
          <div><ArrowIcon /></div>
        </div>
      </Dropdown>
      <Input wrpClasses={['PhoneNumberAuthent']} elementConfig={{ type: 'text' }} elementType="input" />
      <Button btnClasses={['SendSMSAuth']}><a href="/send-sms">Send SMS</a></Button>
      <div className={classes.CodeTitle}>SMS Authentification code</div>
      <Input wrpClasses={['SMSAuthCode']} elementConfig={{ type: 'text' }} elementType="input" />
      <Button btnClasses={['ConfirmSMSAuth']}>Confirm</Button>
    </form>
  </div>
);

export default smsAuth;
