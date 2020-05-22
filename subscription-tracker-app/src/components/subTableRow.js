import React, { Component } from "react";

class SubTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      userInput: "",
      name: "",
      price: 0,
      type: "",
      dueDate: "",
    };
    this.props = {
      subscriptions: this.props.subscriptions,
      addSubscription: this.props.addSubscription,
      editSubscription: this.props.editSubscription,
      deleteSubscription: this.props.deleteSubscription,
    };
  }

  renderTableData() {
    return this.props.subscriptions.map((element, index) => {
      const { name, price, type, dueDate } = element;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>${price}</td>
          <td>{type}</td>
          <td>{dueDate}</td>
          <td>
            <img
              onClick={() => this.props.editSubscription}
              alt="edit"
              src="https://img.icons8.com/material-rounded/24/000000/edit.png"
            />
          </td>
          <td>
            <img
              onClick={() => this.props.deleteSubscription(index)}
              alt="delete"
              src="https://img.icons8.com/material-sharp/24/000000/delete-sign.png"
            />
          </td>
        </tr>
      );
    });
  }

  handleUserInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    console.table(this.props.subscriptions);
    return (
      <div>
        <form>
          <input placeholder="Name..." name="name" onChange={(e) => this.handleUserInput(e)} />
          <input placeholder="Price..." name="price" onChange={(e) => this.handleUserInput(e)} />
          <input name="type" onChange={(e) => this.handleUserInput(e)} />
          <input name="dueDate" onChange={(e) => this.handleUserInput(e)} />

          <button
            onClick={() =>
              this.props.addSubscription(
                this.state.name,
                this.state.price,
                this.state.type,
                this.state.dueDate
              )
            }
          >
            Add Subscription
          </button>
        </form>
        <table id="subscriptionsArray">
          <thead>
            <tr>
              <th className="tableHeading">Name</th>
              <th className="tableHeading">Price</th>
              <th className="tableHeading">Type</th>
              <th className="tableHeading">Due Date</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default SubTableRow;
