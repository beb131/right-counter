import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      memory: 0
    };
  }

  incrementCount(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  incrementCountThree(e) {
    this.setState({
      count: this.state.count + 3
    });
  }

  decrementCount(e) {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  resetCount(e) {
    this.setState((prevState, props) => ({
      count: 0,
      memory: this.state.count ? this.state.count : this.state.memory
    }));
  }

  restoreCount(e) {
    this.setState((prevState, props) => ({
      count: this.state.memory
    }));
  }

  restoreCountAndAdd(e) {
    this.setState((prevState, props) => ({
      count: this.state.memory + this.state.count
    }));
  }

  render() {
    return (
      <div className="App">
        <h2>That guy just said "Right"</h2>
        <h1>{this.state.count} TIMES</h1>
        <button onClick={this.incrementCount.bind(this)}>"Right"</button>
        <button onClick={this.incrementCountThree.bind(this)}>
          "Right Right Right"
        </button>
        <button onClick={this.decrementCount.bind(this)}>Woops</button>
        <button onClick={this.resetCount.bind(this)}>Reset</button>
        <button onClick={this.restoreCount.bind(this)}>Restore</button>
        <button onClick={this.restoreCountAndAdd.bind(this)}>
          Restore and Add
        </button>
      </div>
    );
  }
}

export default App;
