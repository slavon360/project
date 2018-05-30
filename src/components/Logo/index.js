import React from 'react';
import { translate } from 'react-i18next';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo}>
    {props.t('logo')}
  </div>
);

export default translate()(logo);
