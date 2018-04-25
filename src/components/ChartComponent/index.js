import React from 'react';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';
import classes from './ChartComponent.css';

const chartComponent = props => {
    let periods = props.chartConfig.periods.map(period => {
        let dropdownButtonClasses = period.showDpDwn ? ['DropdownButtonPeriod', 'DropdownButtonPeriodChecked'] : ['DropdownButtonPeriod'];
        let btnClasses = period.checked ? ['BtnPeriod', 'BtnPeriodChecked'] : ['BtnPeriod'];
        let containerClasses = period.showDpDwn ? ['DropdownPeriodContainer', 'Show'] : ['DropdownPeriodContainer', 'Hide'];
        let val = period.drpItems ? <Dropdown
                                      key={period.title}
                                      hideShowDropdown={props.hideShowPeriodDropdown}
                                      hideDropdown={props.hidePeriodDropdown}
                                      drpWrpClasses={['DropdownPeriodWrp']}
                                      drpContainerClasses={containerClasses}
                                      dropdownButtonClasses={dropdownButtonClasses}
                                      dropdownTitle={period.title}
                                      dropdownButtons={period.drpItems}
                                      activeBtn="ActivePeriod"
                                      inactiveBtn="InactivePeriod" >{period.title}</Dropdown> : <Button
                                                                            key={period.title}
                                                                            btnClasses={btnClasses}
                                                                            clicked={() => {props.setPeriod(period.title)}}>
                                                                            {period.title}
                                                                        </Button>;
        return val;
    })
    return(
      <div className={classes.ChartComponentWrp}>
        <div className={classes.ChartPeriodWrp}>{periods}</div>
      </div>
    )
}

export default chartComponent;
