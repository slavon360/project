import React from 'react';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';
import classes from './ChartComponent.css';

const chartComponent = props => {
    let periods = props.chartConfig.periods.map(period => {
        let btnClasses = period.checked ? ['BtnPeriod', 'BtnPeriodChecked'] : ['BtnPeriod'];
        let val = period.drpItems ? <Dropdown
                                      dropdownTitle={period.title}
                                      dropdownButtons={period.drpItems}
                                      activeBtn="ActivePeriod"
                                      inactiveBtn="InactivePeriod" /> : <Button btnClasses={btnClasses}>{period.title}</Button>
    })
    return(
      <div className={classes.ChartComponentWrp}>
        <div className={classes.ChartPeriodWrp}></div>
      </div>
    )
}

export default chartComponent;
