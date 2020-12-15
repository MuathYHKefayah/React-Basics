import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    const btnStyle = {
      backgroundColor: "#f44336",
      color: "white",
      margin: "5px",
      border: "1px solid black",
      cursor: "pointer",
      opacity: "0.9",
    };
    return (
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
        <button style={btnStyle} onClick={this.props.deleted}>
          Remove
        </button>
      </Aux>

      // </div>
    );
  }
}

export default withClass(Person, classes.Person);
