import React from 'react';
import classes from './Cockpit.css';

const cockPit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {
                props.persons.length > 0 ? 
                <div>
                    <button
                        key="switchbtn"
                        className={btnClass}
                        onClick={() => props.switched(props.persons[0].name + '!!', 30, 0)}>Switch First Person</button>
                    <button
                        key="togglebtn"
                        className={btnClass}
                        onClick={() => props.toggled()}> Toggle Persons</button>
                </div> : null
            } 
        </div>
        
    );
};

export default cockPit;