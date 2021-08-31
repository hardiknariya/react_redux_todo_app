import React, { Component } from "react";
import "./App.css";
import AddTodo from "./Component/AddTodo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }



  render() {
    return (
      <div className="App">
        <div>
          <h1>Hello hardik</h1>
          <AddTodo />
        </div>
      </div>
    );
  }
}

export default App;
