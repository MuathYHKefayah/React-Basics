import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
     persons: [
       { name:'Moath', age: 25},
       { name:'Ahmad', age: 26},
       { name:'Khaled', age: 27},
     ],
     username: "Moath",
     showPersons: false
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

  usernameChangedHandelr = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow =  this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      display: 'inline-block' 
    };

    return (
      // jsx \\ write html code in js file
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Moath!!', 30)}>Switch Name</button>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}> show / Hide Persons</button>
        { this.state.showPersons ? 
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name}  
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Moath!', 40)}
                changed={this.nameChangedHandler}
                >My Hobbies: Racing</Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div> : null
        }
        
        
        <hr/>
        <UserInput 
          name={this.state.username}
          changed={this.usernameChangedHandelr}/>
        
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
        
      </div>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null , 'Hi, I\'m a React App !!!' ))
  }
}

export default App;
