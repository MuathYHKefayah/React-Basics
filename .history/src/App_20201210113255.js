import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // jsx \\ write html code in js file
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        <Person name="Moath" age="25"/>
        <Person name="Ahmad" age="26">My Hobbies: Racing</Person>
        <Person name="Khaled" age="27"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null , 'Hi, I\'m a React App !!!' ))
  }
}

export default App;
