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

  switchNameHandler  = (newName, newAge, index) => {
    //let personsCopy = JSON.parse(JSON.stringify(this.state.persons));
    //let personsCopy = this.state.persons.slice();
    let personsCopy = [...this.state.persons];
    personsCopy[index].name = newName;
    personsCopy[index].age = newAge;

    //Don't Do This: this.state.persons[index].name = newName;
    // this.setState({
    //   persons: [
    //     { name:newName, age: 25},
    //     { name:'Ahmad', age: 26},
    //     { name:'Khaled', age: newAge},
    //   ]
    // })
    this.setState({
        persons: personsCopy
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow =  this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }



  usernameChangedHandelr = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '5px' 
    };

    let persons = null;
    // Way #2 this is the preferd way
    if(this.state.showPersons){
      persons = 
        (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                        name={person.name} 
                        age={person.age}
                        click={this.switchNameHandler.bind(this, person.name+'!', person.age + 5, index)}
                        changed={this.nameChangedHandler}
                        deleted={this.deletePersonHandler.bind(this, index)}
                        />
            })}
            {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name}  
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Moath!', 40)}
              changed={this.nameChangedHandler}
              >My Hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
          </div>
        );
      
    }

    return (
      // jsx \\ write html code in js file
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {
          this.state.persons.length > 0 ? 
          <div>
            <button
              style={style} 
              onClick={this.switchNameHandler.bind(this, this.state.persons[0].name + '!!', 30, 0)}>Switch Person</button>
            <button
              style={style} 
              onClick={this.togglePersonsHandler}> Toggle Persons</button>
          </div> : alert('No Persons!')
        } 
        
        {
        // Way #1 
        /* { this.state.showPersons ? 
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
        } */}
        {persons}

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
