import React from 'react';
import Button from '../../UI/Button';
import Dropdown from '../../UI/Dropdown';
import Input from '../../UI/Input';
import ArrowIcon from '../../UI/Arrow';
import EngIcon from '../../../../assets/images/icons/languages/Eng.png';
import classes from './SMSAuthenticator.css';

const smsAuth = () => (
  <div className={classes.SMSAuthWrp}>
    <h2>Enable SMS authenticator</h2>
    <form className={classes.AuthentificationForm}>
      <div className={classes.PhoneText}>Phone number:</div>
      <Dropdown
        elementConfig={{ type: 'button' }}
        drpWrpClasses={['PhoneNumberAuthentDropdownWrp']}
        dropdownButtonClasses={['PhoneNumberAuthentDropdownButton']}
        drpContainerClasses={['PhoneNumberAuthentContainer']}
        dropdownButtons={[{ v: 1 }, { v: 2 }, { v: 3 }]}
      >
        <div className={classes.DropdownConent}>
          <div><img src={EngIcon} alt="eng" /></div>
          <div>+1</div>
          <div><ArrowIcon /></div>
        </div>
      </Dropdown>
      <Input wrpClasses={['PhoneNumberAuthent']} elementConfig={{ type: 'text' }} elementType="input" />
      <Button btnClasses={['SendSMSAuth']} elementConfig={{ 'before-content': 'Send SMS' }}>Send SMS</Button>
      <div className={classes.CodeTitle}>SMS Authentification code</div>
      <Input wrpClasses={['SMSAuthCode']} elementConfig={{ type: 'text' }} elementType="input" />
      <Button btnClasses={['ConfirmSMSAuth']}>Confirm</Button>
    </form>
  </div>
);

export default smsAuth;
