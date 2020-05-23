import React, { Component } from "react";

class SubTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      isEditing: false,
      newPrice: "",
      newDueDate: "",
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
      const { id, name, price, type, dueDate } = element;
      return (
        <tr key={index}>
          <td className='tableCell'>{name}</td>
          <td className='tableCell'>${price}</td>
          <td className='tableCell'>{type}</td>
          <td className='tableCell'>{dueDate}</td>
          <td className="tableCell editIcon">
            {!this.state.isEditing ? (
              <img 
                className="editIcon"
                onClick={() => this.toggleEdit()}
                alt="edit"
                src="https://img.icons8.com/material-rounded/24/000000/edit.png"
              />
            ) : (
              <form className="editSubscriptionForm">
                <input className="editInput"
                  placeholder="New Price.."
                  name="newPrice"
                  onChange={(e) => this.handleEditSubscription(e)}
                />
                <input className="editInput"
                  placeholder="New Due-Date.."
                  name="newDueDate"
                  onChange={(e) => this.handleEditSubscription(e)}
                />
                <button className="cancelEditButton" onClick={() => this.toggleEdit()}>Cancel</button>
                <button className="submitEditButton"
                  onClick={() =>
                    this.props.editSubscription(
                      id,
                      this.state.newPrice,
                      this.state.newDueDate
                    )
                  }
                >
                  Submit
                </button>
              </form>
            )}
          </td>
          <td className='tableCell' id='iconCell'>
            <img className="deleteIcon"
              onClick={() => this.props.deleteSubscription(id)}
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

  handleEditSubscription(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }
  toggleAdd() {
    this.setState({
      isAdding: !this.state.isAdding,
    });
  }

  render() {
    console.table(this.props.subscriptions);
    return (
      <div className="subTableRow">
        {!this.state.isAdding ? (
          <button className="addSubscriptionButton" onClick={() => this.toggleAdd()}>Add</button>
        ) : (
          <form className="addSubscriptionForm">
            <input
            className="addInput"
              placeholder="Name..."
              name="name"
              onChange={(e) => this.handleUserInput(e)}
            />
            <input
            className="addInput"
              placeholder="Price..."
              name="price"
              onChange={(e) => this.handleUserInput(e)}
            />
            <input
            className="addInput"
              placeholder="Type..."
              name="type"
              onChange={(e) => this.handleUserInput(e)}
            />
            <input
            className="addInput"
              placeholder="Due-Date..."
              name="dueDate"
              onChange={(e) => this.handleUserInput(e)}
            />
            <button className="cancelButton" onClick={() => this.toggleAdd()}>Cancel</button>
            <button className="submitButton"
              onClick={() =>
                this.props.addSubscription(
                  this.state.name,
                  this.state.price,
                  this.state.type,
                  this.state.dueDate
                )
              }
            >
              Submit
            </button>
          </form>
        )}

        <table className="subscriptionsTable">
          <thead className="tableHead">
            <tr className="tableRowHeaders">
              <th className="tableHeader">Name</th>
              <th className="tableHeader">Price</th>
              <th className="tableHeader">Type</th>
              <th className="tableHeader">Due-Date</th>
            </tr>
          </thead>
          <tbody className="tableBody">{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default SubTableRow;
