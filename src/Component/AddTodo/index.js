import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../Redux/Action";

const AddTodo = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let input = e.target.userInput.value;
        console.log(input);

        props.dispatch(addTodo(input));
      }}
    >
      <input type="text" name="userInput" required />
      <button>Submit</button>
    </form>
  );
};

export default connect()(AddTodo);
