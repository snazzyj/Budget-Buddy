import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions';
import Form from './form/form';
import Display from './display/display';
import './App.css';

function mapStateToProps(state) {
  return {
    expenses: state.expenses,
    income: state.income
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

class App extends Component {

  componentDidMount() {
    this.props.loadExpenses();
    this.props.loadIncome();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <main>
          <section className="left_cont">
            <Form {...this.props} />
          </section>
          <section className="right_cont">
            <Display {...this.props} />
          </section>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
