import React, { Component } from "react";

export default class TodoUsingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      input: "",
    };
    this.addTodo = this.addTodo.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(props) {
    this.setState({
      todo: this.state.todo.filter((e) => e.id !== props),
    });
  }

  onChangeInput(e) {
    this.setState({ input: e.target.value });
  }

  addTodo() {
    this.setState({
      todo: [...this.state.todo, { id: Date.now(), item: this.state.input }],
    });
    this.setState({ input: "" });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          type="text"
          name="item"
          id="item"
          placeholder="Enter Your Item"
          value={this.state.input}
          onChange={(e) => this.onChangeInput(e)}
        />
        <button onClick={() => this.addTodo()}>Add</button>
        {this.state.todo.map((e) => {
          return (
            <div key={e.id}>
              <h2>{e.item}</h2>
              <button onClick={() => this.removeItem(e.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    );
  }
}
