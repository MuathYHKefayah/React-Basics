import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
     persons: [
       { id: 'item1', name:'Moath', age: 25},
       { id: 'item2', name:'Ahmad', age: 26},
       { id: 'item3', name:'Khaled', age: 27},
     ],
     username: "Moath",
     showPersons: false,
     inputText: 'Moath'
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    }

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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


  //Assignment #1
  usernameChangedHandelr = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  //Assignment #2
  inputchangedHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  deleteCharHandler = (charIndex) => {
    const inputText = this.state.inputText.slice();
    inputText.splice(charIndex, 1);
    inputText.setState({inputText: inputText});
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

    const assignmentStyle = {
      color: 'lightcyan',
      textShadow: '2px 2px 4px #000000'
    }

    let persons = null;
    // Way #2 this is the preferd way
    if(this.state.showPersons){
      persons = 
        (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                        key={person.id} 
                        name={person.name} 
                        age={person.age}
                        click={this.switchNameHandler.bind(this, person.name+'!', person.age + 5, index)}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
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
              onClick={this.switchNameHandler.bind(this, this.state.persons[0].name + '!!', 30, 0)}>Switch First Person</button>
            <button
              style={style} 
              onClick={this.togglePersonsHandler}> Toggle Persons</button>
          </div> : alert('If you delete this person you will not have any Person then!')
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
        <h1 style={assignmentStyle}>Assignment #1</h1>
        <UserInput 
          name={this.state.username}
          changed={this.usernameChangedHandelr}/>
        
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
        <hr/>
        <h1 style={assignmentStyle}>Assignment #2</h1>

        <div>
          <input type="text" onChange={this.inputchangedHandler} value={this.state.inputText}/>
          <p>Length of Text : {this.state.inputText.length}</p>
          <ValidationComponent textLength={this.state.inputText.length} />
          <div>
            { this.state.inputText.split("").map( (l, index) => {
              return <CharComponent
                        letter={l}
                        click={() => this.deleteCharHandler(index)}/>
            })

            }
          </div>
        </div>
      </div>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null , 'Hi, I\'m a React App !!!' ))
  }
}

export default App;
