import React, { Component } from "react";
import Axios from "axios";

class Totals extends Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      totalCost: 0,
      subscriptions: [],
    };
    this.handleTotalPrice = this.handleTotalPrice.bind(this);
  }

  componentDidMount() {
    Axios.get("/api/subscriptions").then((res) => {
      this.setState({
        totalCount: res.data.length,
        subscriptions: res.data,
      });
      this.handleTotalPrice();
    });
  }

  handleTotalPrice() {
    const totalPrice = this.state.subscriptions.reduce((acc, element) => {
      let price = Number(element.price);
      return +((acc + price).toFixed(2));
    }, 0);
    this.setState({
      totalCost: totalPrice,
    });
  }

  render() {
    return (
      <div className="totalsContainer">
        <div className="totalsLimiter">
        <div className="totalCountContainer">
          <h2>{this.state.totalCount}</h2>
        </div>
        <div className="totalCostContainer">
          <h2>${this.state.totalCost}</h2>
        </div>
        </div>
      </div>
    );
  }
}

export default Totals;
