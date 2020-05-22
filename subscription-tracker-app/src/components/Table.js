import React, { Component } from "react";
import SubTableRow from "./subTableRow";

class Table extends Component {
  render() {
    return (
      <div>
        <SubTableRow subscriptions={this.props.subscriptions} 
        addSubscription={this.props.addSubscription}
        editSubscription={this.props.editSubscription}
        deleteSubscription={this.props.deleteSubscription}/>
      </div>
    );
  }
}
export default Table;
