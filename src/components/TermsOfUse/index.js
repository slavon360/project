import React from 'react';
// import { withRouter } from 'react-router-dom';
import { termsOfUse } from '../../../dumpData.json';
import Button from '../UI/Button';
import Logo from '../Logo';
import classes from './TermsOfUse.css';

const terms = () => (
  <div className={classes.TermsOfUseWrp}>
    <div className={classes.Head}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <Button
        btnClasses={['BackToPrevious']}
      >Back</Button>
    </div>
    <div className={classes.Content}>
      <h2>Terms of Use</h2>
      <div className={classes.Paragraphs}>
        {termsOfUse.map((parag, index) => (<p key={index}>{parag}</p>))}
      </div>
    </div>
    <div className={classes.Footer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Rights}>
        © {new Date().getFullYear()} Bithela.com All Rights Reserved
      </div>
      <Button
        btnClasses={['BackToPrevious']}
      >Back</Button>
    </div>
  </div>
);

export default terms;
