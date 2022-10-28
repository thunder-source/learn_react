import React, { Component } from "react";

export default class CounterSakClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  IncCount() {
    this.setState({ num: this.state.num + 1 });
  }
  DesCount() {
    this.setState({ num: this.state.num - 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={() => this.IncCount()}>Inc Count</button>
        <button onClick={() => this.DesCount()}>Des Count</button>
      </div>
    );
  }
}
