import React, { useEffect } from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Auxiliary";
import withClass from "../../hoc/withClass";

const cockPit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect 1");
    // Http request...
    setTimeout(() => {
      alert("Persons object changed !");
    }, 1000);
  }, [props.personsLength]); // dependencies

  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2");
    setTimeout(() => {
      alert("Toggled !");
    }, 1000);
  }, [props.showPersons]);

  // we can add multiple dependencies [a, b, c]
  //also we can set empty [] (this will work only one time when component mount)

  // we can have multiple useEffect functions in same functional component

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    // <div className={classes.Cockpit}>
    <Aux>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      {props.persons.length > 0 ? (
        <div>
          <button
            key="switchbtn"
            className={btnClass}
            onClick={() => props.switched(props.persons[0].name + "!!", 30, 0)}
          >
            Switch First Person
          </button>
          <button
            key="togglebtn"
            className={btnClass}
            onClick={() => props.toggled()}
          >
            {" "}
            Toggle Persons
          </button>
        </div>
      ) : null}
    </Aux>
    // </div>
  );
};

export default withClass(React.memo(cockPit), classes.Cockpit);

// use React.memo to optimization the functional component
// it's basically store a snapshot of this component and if its
// only input changes it will re-rendered it any else React will return back the stored snapshot
