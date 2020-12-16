import React, {Component} from 'react';
import Form from './form/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form {...this.props}/>
      </div>
    );
  }
}

export default App;
