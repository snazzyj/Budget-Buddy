import React, {Component} from 'react';
import Form from './form/form';
import Income from './form/income_input';
import Display from './display/display';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {bills: [], income: 0}
  }

  addBill = (bill) => {
    this.setState({
      bills: [...this.state.bills, bill]
    })
  }

  removeBill = (bill_index) => {
    this.setState({
      bills: this.state.bills.filter((_, index) => index !== bill_index)
    })
  }

  addIncome = (e) => {
    e.preventDefault();

    this.setState({
      income: e.target.elements.income.value
    })

    e.target.elements.income.value = ''
  }

  render() {
    console.log('current state: ', this.state)
    return (
      <div className="App">
        <section>
          <Income addIncome={this.addIncome} />
          <Form {...this.props} addBill={this.addBill}  />
        </section>
        <section>
          <Display bills={this.state.bills} income={this.state.income} removeBill={this.removeBill}/>
        </section>
      </div>
    );
  }
}

export default App;
