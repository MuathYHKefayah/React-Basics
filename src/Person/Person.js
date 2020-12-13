import React from 'react';
import classes from './Person.css';


const person = (props) => {
    const btnStyle = {
        backgroundColor: '#f44336',
        color: 'white',
        margin: '5px',
        border: '1px solid black',
        cursor: 'pointer',
        opacity: '0.9'
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input 
                type="text"
                value={props.name} 
                onChange={props.changed} 
                />
            <button style={btnStyle} onClick={props.deleted}>Remove</button>
        </div>
            
    )
};

export default person;