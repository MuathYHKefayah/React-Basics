import React from 'react';
import './Person.css';

const person = (props) => {
    const btnStyle = {
        margin: '5px'
    }
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button style={btnStyle} onClick={props.deleted}>Remove</button>
        </div>
    )
};

export default person;