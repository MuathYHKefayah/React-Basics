import React, { PureComponent } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  //*Instead of using shouldComponentUpdate for optimization we extends from pureComponent 
  //* PureComponent already implemented the shouldComponentUpdate with all cases to check
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   //using shouldComponentUpdate for optimization
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.switched !== this.props.switched ||
  //     nextProps.deleted !== this.props.deleted
  //   ) {
  //     return true; // re-render or update Person component if props.persons changed
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  // componentWillUpdate(){

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() =>
              this.props.switched(person.name + "!", person.age + 5, index)
            }
            changed={(event) => this.props.changed(event, person.id)}
            deleted={() => this.props.deleted(index)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
