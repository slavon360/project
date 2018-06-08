import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './AuthenticatorSupport.css';
import QrCode from '../../../../assets/images/backgrounds/qr-code.jpg';

const authSupport = () => (
  <div className={classes.AuthSupportWrp}>
    <h2>Enable authenticator support</h2>
    <form className={classes.DisableForm}>
      <div className={classes.SecretCodeText}>Authenticator <span>Secret code:</span></div>
      <div className={classes.Top}>
        <Input
          wrpClasses={['SecretCodeAuthSupportTop']}
          elementConfig={{ type: 'text', value: 'kjuytfc765edcvbhui90' }}
          elementType="input"
        />
        <div className={classes.Tip}>
          Please save this <span>Secret Code</span> for recovery of
          authenticator code, should you lose your phone
        </div>
      </div>
      <div className={classes.QrBlock}>
        <img src={QrCode} alt="qr code" />
        <div className={classes.Steps}>
          <div className={classes.Item}>
            <div className={classes.Number}>1</div>
            <div className={classes.Text}>{`Install an authentificator app on your mobile
               device if you don't already have one. We support these options`}</div>
          </div>
          <div className={classes.Item}>
            <div className={classes.Number}>2</div>
            <div className={classes.Text}>Scan QR code with the autentificator
               (or tap it in mobile browser)</div>
          </div>
          <div className={classes.Item}>
            <div className={classes.Number}>3</div>
            <div className={classes.Text}>Please write down or print a copy of the
               16-digit secret code and put it in a safe place</div>
          </div>
          <div className={classes.Item}>
            <div className={classes.Number}>4</div>
            <div className={classes.Text}>If your phone gets lost, stolen or erased, you will
               need this code to link Coinremit to a new authenticator app install once again</div>
          </div>
        </div>
      </div>
      <div className={classes.Once}>Once an autheticator app will is enabled,
         all other 2FA methods will not be accepted
      </div>
      <div className={classes.Enter}>Enter the 2-step verification
         code provided by your authentication app
      </div>
      <div className={classes.Footer}>
        <Input
          wrpClasses={['SecretCodeAuthSupportBottom']}
          elementConfig={{ type: 'text' }}
          elementType="input"
        />
        <Button btnClasses={['ConfirmDisableSMSAuth']} elementConfig={{ 'before-content': 'Confirm' }}>Confirm</Button>
      </div>
    </form>
  </div>
);

export default authSupport;
