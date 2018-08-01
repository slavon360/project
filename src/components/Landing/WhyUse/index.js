import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import BitcoinIcon from '../../UI/Icons/BitcoinLanding';
import PadlockIcon from '../../UI/Icons/Padlock';
import TimerIcon from '../../UI/Icons/Timer';
import classes from './WhyUse.css';

const cx = classNames.bind(classes);

const getIcon = (icon) => {
  switch (icon) {
    case 'bitcoin':
      return <BitcoinIcon outerRadiusStyles={{ fill: '#932c88' }} innerRadiusStyles={{ fill: '#ce41a1' }} />;
    case 'padlock':
      return <PadlockIcon topStyles={{ fill: '#ce41a1' }} bottomStyles={{ fill: '#932c88' }} />;
    case 'timer':
      return <TimerIcon outerRadiusStyles={{ fill: '#932c88' }} innerRadiusStyles={{ fill: '#ce41a1' }} />;
    default: return BitcoinIcon;
  }
};
const whyUse = props => (
  <div className={classes.WhyUseWrp}>
    <h2>Why use Bithela</h2>
    <div className={classes.TabsWrp}>
      {props.tabs.map((tab, index) => (
        <div
          className={cx(classes.Tab, { Active: tab.checked, Inactive: !tab.checked })}
          key={index}
        >
          <div className={classes.Icon}>
            {getIcon(tab.icon)}
          </div>
          <div className={classes.Title} dangerouslySetInnerHTML={{ __html: tab.title }} />
          <div className={classes.Description}>{tab.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default whyUse;

whyUse.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.description,
  })),
};
