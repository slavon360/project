import React from 'react';
import classNames from 'classnames';
import Dropdown from '../UI/Dropdown';
import ChartHeader from '../ChartHeader';
import Button from '../UI/Button';
import Chart from '../Chart';
import classes from './ChartComponent.css';

const chartComponent = (props) => {
  const periods = props.chartConfig.periods.map(period => (period.drpItems ? (
    <Dropdown
      key={period.title}
      setValue={props.setPeriodDpDwn}
      hideShowDropdown={props.hideShowPeriodDropdown}
      hideDropdown={props.hidePeriodDropdown}
      drpWrpClasses={['DropdownPeriodWrp']}
      drpContainerClasses={
        classNames('DropdownPeriodContainer', { Show: period.showDpDwn, Hide: !period.showDpDwn }).split(' ')
      }
      dropdownButtonClasses={classNames('DropdownButtonPeriod', { DropdownButtonPeriodChecked: period.showDpDwn }).split(' ')}
      dropdownTitle={period.title}
      dropdownButtons={period.drpItems}
      activeBtn="BtnPeriodChecked"
    >
      {period.title}
    </Dropdown>
  ) : (
    <Button
      key={period.title}
      btnClasses={classNames('BtnPeriod', { BtnPeriodChecked: period.checked }).split(' ')}
      clicked={() => props.setPeriodBtn(period)}
    >
      {period.title}
    </Button>)));
  return (
    <div className={classes.ChartComponentWrp}>
      <div className={classes.Header}>
        <ChartHeader currency={props.currency} />
      </div>
      <div className={classes.ChartPeriodWrp}>{periods}</div>
      <div className={classes.ChartContent}>
        {props.chartData ? <Chart data={props.chartData}/> : 'loading...'}
      </div>
    </div>
  );
};

export default chartComponent;
