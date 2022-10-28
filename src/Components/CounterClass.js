import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    // this.incrementNumber = this.incrementNumber.bind(this); // bind is important in ES6
    // this.decrementNumber = this.decrementNumber.bind(this);
  }
  incrementNumber() {
    this.setState({ num: this.state.num + 1 });
  }
  decrementNumber() {
    this.setState({ num: this.state.num - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={() => this.incrementNumber()}>Increment</button>
        <button onClick={this.decrementNumber.bind(this)}>Decrement</button>
      </div>
    );
  }
}

// import React, { Component } from 'react'

// class CounterClass extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default CounterClass;
