import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const btnStyle = {
        backgroundColor: '#f44336',
        color: 'white',
        margin: '5px',
        border: '1px solid black',
        cursor: 'pointer',
        opacity: '0.9'
    }

    const style ={
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button style={btnStyle} onClick={props.deleted}>Remove</button>
        </div>
    )
};

export default Radium(person);