import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Header from './components/Header'
import Table from './components/Table'
import axios from 'axios'
import SearchBar from "./components/searchBar"
import ChartComp from './components/Chart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      subscriptions: [],
    };
    this.addSubscription = this.addSubscription.bind(this)
    this.editSubscription = this.editSubscription.bind(this)
    this.deleteSubscription = this.deleteSubscription.bind(this)
  }

  componentDidMount(){
    axios.get('/api/subscriptions').then(res => {
      this.setState({subscriptions: res.data})
    })
    .catch(err => console.log(err))
  }

  addSubscription(name, price, type, dueDate){
    const body = {name, price, type, dueDate}
    
    axios.post('/api/subscriptions', body).then(res => {
      this.setState({
        subscriptions: res.data
      })
      .catch(err => console.log(err))
    })
  }

  editSubscription(id, newPrice, newDueDate ){
    const body = {newPrice, newDueDate}
    axios.put(`/api/subscriptions/${id}`, body).then(res => {
      this.setState({
        subscriptions: res.data
      })
    })
  }

  deleteSubscription(id){
    axios.delete(`/api/subscriptions/${id}`).then(res => {
      this.setState({
        subscriptions: res.data
      })
    })
  }

  render() {
    return <div className="App">
      <Header />
     {/* <SearchBar /> */}
      <Table className="tableComponent" 
      subscriptions={this.state.subscriptions}
      addSubscription={this.addSubscription}
      editSubscription={this.editSubscription}
      deleteSubscription={this.deleteSubscription}
      />
     {/* <ChartComp subscriptions={this.state.subscriptions}/> */}
    </div>;
  }
}

export default App;
