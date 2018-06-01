import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import { ChartCanvas, Chart } from 'react-stockcharts';
import { BarSeries, CandlestickSeries } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import {
  CrossHairCursor,
  MouseCoordinateX,
  MouseCoordinateY
} from 'react-stockcharts/lib/coordinates';
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";


class MainChart extends Component {
  render() {
    const { data: initialData, width, ratio } = this.props;
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    )
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(initialData);
    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
		const xExtents = [start, end];
    return(
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={width}
        margin={{ left: 70, right: 70, top: 10, bottom: 30 }}
        seriesName="MSFT"
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}>
        <Chart id={1} yExtents={[d => [d.high, d.low]]}>
          <XAxis axisAt="bottom" orient="bottom" />
          <YAxis axisAt="right" orient="right" />
          <MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")}
					/>
          <CandlestickSeries />
          <MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={ this.props.day ? timeFormat("%Y-%m-%d %H:%M") : timeFormat("%Y-%m-%d") }
					/>
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
    )
  }
}
MainChart.propTypes = {
  data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired
};
MainChart = fitWidth(MainChart);

export default MainChart;
