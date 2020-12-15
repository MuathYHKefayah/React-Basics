import React, { Component } from "react";

import classes from "./App.css";

import Persons from "../components/Persons/Persons";
import CockPit from "../components/Cockpit/Cockpit";

import UserInput from "../components/UserInput/UserInput";
import UserOutput from "../components/UserOutput/UserOutput";
import ValidationComponent from "../components/ValidationComponent/ValidationComponent";
import CharComponent from "../components/CharComponent/CharComponent";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    //we can init the state here
  }

  state = {
    persons: [
      { id: "item1", name: "Moath", age: 25 },
      { id: "item2", name: "Ahmad", age: 26 },
      { id: "item3", name: "Khaled", age: 27 },
    ],
    username: "Moath",
    showPersons: false,
    inputText: "",
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  //   // to prepare state based on props
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
    //return false; to prevent App component update for some reason
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  switchNameHandler = (newName, newAge, index) => {
    //let personsCopy = JSON.parse(JSON.stringify(this.state.persons));
    //let personsCopy = this.state.persons.slice();
    let personsCopy = [...this.state.persons];
    personsCopy[index].name = newName;
    personsCopy[index].age = newAge;

    //Don't Do This: this.state.persons[index].name = newName;
    this.setState({
      persons: personsCopy,
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  //Assignment #1
  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  //Assignment #2
  inputChangedHandler = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  deleteCharHandler = (charIndex) => {
    const inputText = this.state.inputText.split("");
    inputText.splice(charIndex, 1);
    const updatedText = inputText.join("");
    this.setState({ inputText: updatedText });
  };

  render() {
    const assignmentStyle = {
      color: "lightcyan",
      textShadow: "2px 2px 4px #000000",
    };

    let persons = null;
    // Way #2 this is the preferred way
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          switched={this.switchNameHandler}
          changed={this.nameChangedHandler}
          deleted={this.deletePersonHandler}
        />
      );
    }

    return (
      // jsx \\ write html code in js file
      <div className={classes.App}>
        {/* Cockpit */}
        <CockPit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggled={this.togglePersonsHandler}
          switched={this.switchNameHandler}
        />

        {/* display persons */}
        {persons}

        <hr />
        <h1 style={assignmentStyle}>Assignment #1</h1>
        <UserInput
          name={this.state.username}
          changed={this.usernameChangedHandler}
        />

        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
        <hr />
        <h1 style={assignmentStyle}>Assignment #2</h1>

        <div>
          <input
            type="text"
            onChange={this.inputChangedHandler}
            value={this.state.inputText}
          />
          <p>Length of Text : {this.state.inputText.length}</p>
          <ValidationComponent textLength={this.state.inputText.length} />
          <div>
            {this.state.inputText.split("").map((ch, index) => {
              return (
                <CharComponent
                  key={index}
                  letter={ch}
                  clicked={() => this.deleteCharHandler(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
