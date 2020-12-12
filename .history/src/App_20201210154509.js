import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
     persons: [
       { name:'Moath', age: 25},
       { name:'Ahmad', age: 26},
       { name:'Khaled', age: 27},
     ]
  }

  switchNameHandler  = (newName, newAge) => {
    //Don't Do This: this.state.persons[0].name = "Max";
    this.setState({
      persons: [
        { name:newName, age: 25},
        { name:'Ahmad', age: 26},
        { name:'Khaled', age: newAge},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name:'Moath', age: 25},
        { name: event.target.value, age: 26},
        { name:'Khaled', age: 27},
      ]
    })
  }

  render() {
    return (
      // jsx \\ write html code in js file
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Moath!!', 30)}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Moath!', 40)}
          changed={this.nameChangedHandler}
          >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        
      </div>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null , 'Hi, I\'m a React App !!!' ))
  }
}

export default App;
