import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Auxiliary";
import withClass from "../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from '../../context/auth-context';

const cockPit = (props) => {

  //const toggleBtnRef = React.createRef(); //* doesn't work in functional components
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  //* we put ref action in useEffect because this method called after first render 
  //* just to give react a chance to connecting to ref
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    
    toggleBtnRef.current.click();

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
    
  }, []); 

  useEffect(() => {
    console.log("[Cockpit.js] useEffect 1");
    // Http request...
    setTimeout(() => {
      alert("Persons object changed or First time displayed!");
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
            ref={toggleBtnRef}
          >
            {" "}
            Toggle Persons
          </button>
          <button onClick={authContext.login}>Login</button>
        </div>
      ) : null}
    </Aux>
    // </div>
  );
};

cockPit.propTypes = {
  title: PropTypes.string,
  persons: PropTypes.array,
  personsLength: PropTypes.number,
  showPersons: PropTypes.bool,
  switched: PropTypes.func,
  toggled: PropTypes.func,
  login: PropTypes.bool
};

export default withClass(React.memo(cockPit), classes.Cockpit);

// use React.memo to optimization the functional component
// it's basically store a snapshot of this component and if its
// only input changes it will re-rendered it any else React will return back the stored snapshot
