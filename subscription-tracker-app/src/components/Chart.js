import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Your Monthly Subscription Bill",
            "National Per Month Average",
          ],
        },
      },
      series: [
        {
          name: "Dollars",
          data: [44, 237.33],
        },
      ],
      options: {
        chart: {
          id: "basic-donut",
        },
        xaxis: {
          categories: [
            "Your Monthly Subscription Bill",
            "National Per Month Average",
          ],
        },
      },
      series: [
        {
          name: "Dollars",
          data: [44, 237.33],
        },
      ],
    };
  }
  render() {
    return (
      <div className="chartContainer">
        <div className="barGraph">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="400"
          />
        </div>
        <div className="pieGraph">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="400"
          />
        </div>
      </div>
    );
  }
}

export default ChartComp;
