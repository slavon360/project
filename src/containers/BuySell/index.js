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
        periods: [
          {
            title: 'Min',
            showDpDwn: false,
            drpItems: [
                {title: '5', checked: false},
                {title: '10', checked: false},
                {title: '15', checked: false},
                {title: '30', checked: false}
              ]
          },
          {
            title: 'Hour',
            showDpDwn: false,
            drpItems: [
              {title: '1', checked: false},
              {title: '2', checked: false},
              {title: '4', checked: false},
              {title: '6', checked: false},
              {title: '12', checked: false}
            ]
          },
          {title: 'Day', checked: true},
          {title: 'Week', checked: false}
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
        period.drpItems && period.title === title && (period.showDpDwn = true);
      })
      this.setState(updChartConfig);
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
                      hideShowPeriodDropdown={this.hideShowPeriodDropdown}/>
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
