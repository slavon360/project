import React from 'react';
import classes from './Logo.css';
import { translate } from 'react-i18next';

const logo = (props) => (
    <div className={classes.Logo}>
      {props.t('logo')}
    </div>
);

export default translate()(logo);
