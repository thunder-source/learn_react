import React from "react";

export default class ClassComponentTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleInputState: "",
      handleAddTodo: [
        {
          item: "hello",
          id: 0,
        },
      ],
    };
  }

  //  handleInput  = () => {
  //     )
  // }

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Add Item"
          value={this.state.handleInputState}
          onChange={() => <></>}
        />
        <button>Add Item</button>
      </>
    );
  }
}
