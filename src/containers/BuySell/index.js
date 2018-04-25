import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuySellComponent from '../../components/BuySellComponent';
import ChartComponent from '../../components/ChartComponent';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions';
import Adj from '../../hoc/Adj/AdjComponent';
import classes from './BuySell.css';

class BuySell extends Component {
    componentDidMount(){
      this.props.onFetchCoins()
    }
    state = {
      buy: true,
      switched: false,
      chartConfig: {
        selectedPeriod: null,
        periods: [
          {
            title: 'min',
            showDpDwn: false,
            drpItems: [
                {type: 'min', title: '5', checked: false},
                {type: 'min', title: '10', checked: false},
                {type: 'min', title: '15', checked: false},
                {type: 'min', title: '30', checked: false}
              ]
          },
          {
            title: 'hour',
            showDpDwn: false,
            drpItems: [
              {type: 'hour', title: '1', checked: false},
              {type: 'hour', title: '2', checked: false},
              {type: 'hour', title: '4', checked: false},
              {type: 'hour', title: '6', checked: false},
              {type: 'hour', title: '12', checked: false}
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
    setPeriod = (title) => {
      let updChartConfig = {...this.state.chartConfig};
      updChartConfig.periods.forEach(period => {
        period.title === title && !period.drpItems;
      });
    }
    render () {
      let content = this.props.error ? 'Cannot load data' : 'loading...';
      if (this.props.coins) {
        content = <Adj>
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
                      setPeriod={this.setPeriod}/>
                  </Adj>
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
