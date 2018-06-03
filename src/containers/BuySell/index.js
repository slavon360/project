import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BuySellComponent from '../../components/BuySellComponent';
import ChartComponent from '../../components/ChartComponent';
import Transactions from '../../components/Transactions';
import * as actionTypes from '../../actions/actionTypes';
import * as actions from '../../actions';
import classes from './BuySell.css';

class BuySell extends Component {
  state = {
    buy: true,
    switched: false,
    headData: [{ title: 'Date' }, { title: 'Price' }, { title: 'Quantity' }, { title: 'Amount' }],
    transactions: [
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
      {
        date: {
          dayMonthYear: '01 Dec 2017',
          hourMinutes: '12:27 am',
        },
        price: '36550',
        quantity: '0.116',
        amount: '4239.8',
      },
    ],
    chartConfig: {
      selectedPeriod: null,
      periods: [
        {
          title: 'min',
          showDpDwn: false,
          drpItems: [
            { type: 'min', title: '5', value: '5', checked: false },
            { type: 'min', title: '10', value: '10', checked: false },
            { type: 'min', title: '15', value: '15', checked: false },
            { type: 'min', title: '30', value: '30', checked: false },
          ],
        },
        {
          title: 'hour',
          showDpDwn: false,
          drpItems: [
            { type: 'hour', title: '1', value: '1', checked: false },
            { type: 'hour', title: '2', value: '2', checked: false },
            { type: 'hour', title: '4', value: '4', checked: false },
            { type: 'hour', title: '6', value: '6', checked: false },
            { type: 'hour', title: '12', value: '12', checked: false },
          ],
        },
        { title: 'day', type: 'day', value: '1', checked: true },
        { title: 'week', type: 'day', value: '7', checked: false },
      ],
    },
    currency: {
      fsym: 'ETH',
      tsym: 'AUD',
      fsymTitle: 'Ethereum',
    },
  }

  componentDidMount() {
    this.setSelectedPeriod();
    this.props.onFetchCoins();
  }

  whichPeriodTime = (selectedPeriodTitle) => {
    switch (selectedPeriodTitle) {
      case 'day':
        return this.props.onFetchHourlyData(220, 1, this.state.currency);
      case 'week':
        return this.props.onFetchWeekData(850, 1, this.state.currency);
      default: return this.props.onFetchHourlyData(24, 1, this.state.currency);
    }
  }

  setSelectedPeriod = () => {
    const selectedPeriod = this.state.chartConfig.periods.find((period) => {
      if (!period.drpItems) {
        return period.checked;
      }
      return period.drpItems.find(drp => drp.checked);
    });
    const updChartConfig = { ...this.state.chartConfig };
    updChartConfig.selectedPeriod = selectedPeriod;
    this.setState({ chartConfig: updChartConfig }, () => {
      const title = this.state.chartConfig.selectedPeriod.title;
      this.whichPeriodTime(title);
    });
  }

  buySellSwitcher = (value) => {
    this.setState({ buy: value === actionTypes.BUY });
  }

  currenciesPlaceSwitcher = () => {
    this.setState(prevState => ({
      switched: !prevState.switched,
    }));
  }

  hideShowPeriodDropdown = (title) => {
    const updChartConfig = { ...this.state.chartConfig };
    updChartConfig.periods = updChartConfig.periods.map((period) => {
      const updPeriod = { ...period };
      if (period.checked) {
        updPeriod.checked = false;
      }
      if (period.drpItems && period.title !== title) {
        updPeriod.showDpDwn = false;
      }
      if (period.drpItems && period.title === title) {
        updPeriod.showDpDwn = !period.showDpDwn;
      }
      return updPeriod;
    });
    this.setState({ chartConfig: updChartConfig });
  }

  hidePeriodDropdown = (title) => {
    const updChartConfig = { ...this.state.chartConfig };
    updChartConfig.periods = updChartConfig.periods.map((period) => {
      const updPeriod = { ...period };
      if (period.drpItems && period.title === title) {
        updPeriod.showDpDwn = false;
      }
      return updPeriod;
    });
    this.setState({ chartConfig: updChartConfig });
  }

  setPeriodBtn = (selectedPeriod) => {
    const updChartConfig = { ...this.state.chartConfig };
    updChartConfig.periods = updChartConfig.periods.map((period) => {
      const updPeriod = { ...period };
      if (period.value === selectedPeriod.value && period.type === selectedPeriod.type) {
        updPeriod.checked = true;
        updChartConfig.selectedPeriod = updPeriod;
      } else {
        if (!period.drpItems) {
          updPeriod.checked = false;
        }
        if (period.drpItems) {
          updPeriod.drpItems = period.drpItems.map(p => ({
            ...p,
            checked: false,
          }));
        }
      }
      return updPeriod;
    });
    this.setState({ chartConfig: updChartConfig }, () => {
      const title = this.state.chartConfig.selectedPeriod.title;
      this.whichPeriodTime(title);
    });
  }

  setPeriodDpDwn = (selectedPeriod) => {
    const updChartConfig = { ...this.state.chartConfig };
    updChartConfig.periods = updChartConfig.periods.map((period) => {
      const updPeriod = { ...period };
      if (updPeriod.drpItems) {
        updPeriod.drpItems = updPeriod.drpItems.map((p) => {
          const upd = { ...p };
          if (p.value === selectedPeriod.value && p.type === selectedPeriod.type) {
            upd.checked = true;
          } else {
            upd.checked = false;
          }
          return upd;
        });
      }
      return updPeriod;
    });
    this.setState({ chartConfig: updChartConfig });
  }

  render() {
    let content = this.props.error ? 'Cannot load data' : 'loading...';
    if (this.props.coins) {
      content = (
        <Fragment>
          <BuySellComponent
            buy={this.state.buy}
            switched={this.state.switched}
            coins={this.props.coins}
            selectedCrypt={this.props.selectedCrypt}
            setCurrency={this.props.onSetCurrency}
            buySellSwitcher={this.buySellSwitcher}
            currenciesPlaceSwitcher={this.currenciesPlaceSwitcher}
          />
          <ChartComponent
            chartData={this.props.chartData}
            chartConfig={this.state.chartConfig}
            currency={this.state.currency}
            hideShowPeriodDropdown={this.hideShowPeriodDropdown}
            hidePeriodDropdown={this.hidePeriodDropdown}
            setPeriodBtn={this.setPeriodBtn}
            setPeriodDpDwn={this.setPeriodDpDwn}
          />
          <div className={classes.TransactionsWrp}>
            <h3 className={classes.History}>History</h3>
            <div className={classes.TableWrp}>
              <Transactions
                propNames={['date', 'price', 'quantity', 'amount']}
                headData={this.state.headData}
                bodyData={this.state.transactions}
              />
            </div>
          </div>
        </Fragment>
      );
    }

    return (
      <div className={classes.BuySellWrp}>
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  chartData: state.chart.chartData,
  coins: state.currencies.coins,
  error: state.currencies.error,
  selectedCrypt: state.currencies.selectedCrypt,
});

const mapDispatchToProps = dispatch => ({
  onFetchHourlyData: (limit, aggregate, currency) => {
    dispatch(actions.fetchHourlyData(limit, aggregate, currency));
  },
  onFetchWeekData: (limit, aggregate, currency) => {
    dispatch(actions.fetchWeekData(limit, aggregate, currency));
  },
  onFetchCoins: () => dispatch(actions.fetchCoinsPrices()),
  onSetCurrency: currencyName => dispatch(actions.setCurrency(currencyName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuySell);
