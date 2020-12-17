import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './redux/actions';
import Form from './form/form';
import Display from './display/display';
import './App.css';

function mapStateToProps(state) {
  return {
      user: state
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
        <section>
          <Form {...this.props} />
        </section>
        <section>
          <Display {...this.props} />
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
