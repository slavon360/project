import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuySellComponent from '../../components/BuySellComponent';
import ChartComponent from '../../components/ChartComponent';
import Transactions from '../../components/Transactions';
import * as actionTypes from '../../actions/actionTypes';
import * as actions from '../../actions';
import classes from './BuySell.css';

class BuySell extends Component {
    componentDidMount(){
      this.props.onFetchCoins()
    }
    state = {
      buy: true,
      switched: false,
      headData: [{title: 'Date'}, {title: 'Price'}, {title: 'Quantity'}, {title: 'Amount'}],
      transactions: [
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '0.116', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '1.16', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '0.116', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '0.116', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '0.116', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '0.116', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '0.816', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '0.116', amount: '4239.8'},
        {date: '01 Dec 2017  12:27 am', price: '36550', quantity: '36', amount: '4239.8'}
      ],
      chartConfig: {
        selectedPeriod: null,
        periods: [
          {
            title: 'min',
            showDpDwn: false,
            drpItems: [
                {type: 'min', title: '5', value: '5', checked: false},
                {type: 'min', title: '10', value: '10', checked: false},
                {type: 'min', title: '15', value: '15', checked: false},
                {type: 'min', title: '30', value: '30', checked: false}
              ]
          },
          {
            title: 'hour',
            showDpDwn: false,
            drpItems: [
              {type: 'hour', title: '1', value: '1', checked: false},
              {type: 'hour', title: '2', value: '2', checked: false},
              {type: 'hour', title: '4', value: '4', checked: false},
              {type: 'hour', title: '6', value: '6', checked: false},
              {type: 'hour', title: '12', value: '12', checked: false}
            ]
          },
          {title: 'day', type: 'day', value: '1', checked: true},
          {title: 'week', type: 'day', value: '7', checked: false}
        ]
      }
    }
    buySellSwitcher = (value) => {
      this.setState({buy: value === actionTypes.BUY ? true : false})
    }
    currenciesPlaceSwitcher = () => {
      this.setState(prevState => {
        return {switched: !prevState.switched}
      })
    }
    hideShowPeriodDropdown = (title) => {
      let updChartConfig = {...this.state.chartConfig};
      updChartConfig.periods.forEach(period => {
        period.checked && (period.checked = false);
        period.drpItems && period.title !== title && (period.showDpDwn = false);
        period.drpItems && period.title === title && (period.showDpDwn = !period.showDpDwn ? true : false);
      })
      this.setState(updChartConfig);
    }
    hidePeriodDropdown = (title) => {
      let updChartConfig = {...this.state.chartConfig};
      updChartConfig.periods.forEach(period => {
        period.drpItems && period.title === title && (period.showDpDwn = false);
      });
      this.setState(updChartConfig);
    }
    setPeriodBtn = (selectedPeriod) => {
      let updChartConfig = {...this.state.chartConfig};
      updChartConfig.periods.forEach(period => {
        if (period.value === selectedPeriod.value && period.type === selectedPeriod.type) {
          period.checked = true;
        } else {
          !period.drpItems && (period.checked = false);
          period.drpItems && period.drpItems.forEach(p => p.checked = false);
        }
      });
      this.setState({chartConfig: updChartConfig});
    }
    setPeriodDpDwn = (selectedPeriod) => {
      let updChartConfig = {...this.state.chartConfig};
      updChartConfig.periods.forEach(period => {
        if (period.drpItems) {
          period.drpItems.forEach(p => {
            if (p.value === selectedPeriod.value && p.type === selectedPeriod.type) {
              p.checked = true;
            } else {
              p.checked = false;
            }
          })
        }
      });
      this.setState({chartConfig: updChartConfig});
    }
    render () {
      let content = this.props.error ? 'Cannot load data' : 'loading...';
      if (this.props.coins) {
        content = <Fragment>
                    <BuySellComponent
                        buy={this.state.buy}
                        switched={this.state.switched}
                        coins={this.props.coins}
                        selectedCrypt={this.props.selectedCrypt}
                        setCurrency={this.props.onSetCurrency}
                        buySellSwitcher={this.buySellSwitcher}
                        currenciesPlaceSwitcher={this.currenciesPlaceSwitcher}/>
                    <ChartComponent
                      chartConfig={this.state.chartConfig}
                      hideShowPeriodDropdown={this.hideShowPeriodDropdown}
                      hidePeriodDropdown={this.hidePeriodDropdown}
                      setPeriodBtn={this.setPeriodBtn}
                      setPeriodDpDwn={this.setPeriodDpDwn}/>
                    <div className={classes.TransactionsWrp}>
                      <h3 className={classes.History}>History</h3>
                      <div className={classes.TableWrp}>
                        <Transactions
                          propNames={['date', 'price', 'quantity', 'amount']}
                          headData={this.state.headData}
                          bodyData={this.state.transactions}/>
                      </div>
                    </div>
                  </Fragment>
      }
      return(
        <div className={classes.BuySellWrp}>
          {content}
        </div>)
    }
}
const mapStateToProps = state => {
    return {
      coins: state.currencies.coins,
      error: state.currencies.error,
      selectedCrypt: state.currencies.selectedCrypt
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onFetchCoins: () => dispatch(actions.fetchCoinsPrices()),
      onSetCurrency: (currencyName) => dispatch(actions.setCurrency(currencyName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuySell);
