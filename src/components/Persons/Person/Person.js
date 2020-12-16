import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import PropTypes from "prop-types";

import AuthContext from "../../../context/auth-context";

class Person extends Component {
  //* Way #1 to use ref
  // constructor(props) {
  //   super(props);
  //   this.inputElRef = React.createRef();
  // }

  componentDidMount() {
    //this.inputElRef.current.focus();
    this.inputElRef.focus();
  }

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
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
          ref={(inputElRef) => {
            this.inputElRef = inputElRef;
          }} //* this way doesn't work with functional component
          //ref={this.inputElRef}
        />
        <button style={btnStyle} onClick={this.props.deleted}>
          Remove
        </button>
      </Aux>

      // </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  deleted: PropTypes.func,
};

export default withClass(Person, classes.Person);
