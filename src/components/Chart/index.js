import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import { ChartCanvas, Chart } from 'react-stockcharts';
import { CandlestickSeries } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import {
  CrossHairCursor,
  MouseCoordinateX,
  MouseCoordinateY,
} from 'react-stockcharts/lib/coordinates';
import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { last } from 'react-stockcharts/lib/utils';

const candlesAppearance = {
  wickStroke: '#444',
  fill: function fill(d) {
    return d.close > d.open ? '#77d021' : '#e83f86';
  },
  stroke: '#444',
  candleStrokeWidth: 1,
  widthRatio: 0.6,
  opacity: 1,
};

class MainChart extends Component {
    state = {
      height: 560,
    }
    updateDimensions = () => {
      if (window.innerWidth >= 1920 && this.state.height !== 560) this.setState({ height: 560 });
      if (window.innerWidth < 1920 && this.state.height !== 400) this.setState({ height: 400 });
      if (window.innerWidth < 768 && this.state.height !== 300) this.setState({ height: 300 });
      if (window.innerWidth < 414 && this.state.height !== 280) this.setState({ height: 280 });
      if (window.innerWidth < 360 && this.state.height !== 260) this.setState({ height: 260 });
    }
    componentWillMount = () => {
      this.updateDimensions();
    }
    componentDidMount = () => {
      window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount = () => {
      window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
      const { data: initialData, width, ratio } = this.props;
      const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
        d => d.date,
      );
      const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(initialData);
      const start = xAccessor(last(data));
      const end = xAccessor(data[Math.max(0, data.length - 150)]);
      const xExtents = [start, end];
      const margin = { left: 1, right: 70, top: 20, bottom: 30 };
      const gridWidth = width - margin.left - margin.right;

      const showGrid = true;
      const yGrid = showGrid ? {
        innerTickSize: -1 * gridWidth,
        tickStrokeDasharray: 'Solid',
        tickStrokeOpacity: 0.1,
        tickStrokeWidth: 1 } : {};
      return (
        <ChartCanvas
          height={this.state.height}
          ratio={ratio}
          width={width}
          margin={{ left: 70, right: 70, top: 10, bottom: 30 }}
          seriesName="MSFT"
          data={data}
          xScale={xScale}
          xAccessor={xAccessor}
          displayXAccessor={displayXAccessor}
          xExtents={xExtents}
        >
          <Chart id={1} yExtents={[d => [d.high, d.low]]}>
            <XAxis axisAt="bottom" orient="bottom" />
            <YAxis axisAt="right" orient="right" {...yGrid} />
            <MouseCoordinateY
              at="right"
              orient="right"
              displayFormat={format('.2f')}
            />
            <CandlestickSeries {...candlesAppearance} />
            <MouseCoordinateX
              at="bottom"
              orient="bottom"
              displayFormat={this.props.day ? timeFormat('%Y-%m-%d %H:%M') : timeFormat('%Y-%m-%d')}
            />
          </Chart>
          <CrossHairCursor />
        </ChartCanvas>
      );
    }
}
MainChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    open: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    close: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    hight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    low: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    volume: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
};

export default fitWidth(MainChart);
