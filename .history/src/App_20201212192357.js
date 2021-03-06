import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
     persons: [
       { id: 'item1', name:'Moath', age: 25},
       { id: 'item2', name:'Ahmad', age: 26},
       { id: 'item3', name:'Khaled', age: 27},
     ],
     username: "Moath",
     showPersons: false,
     inputText: ''
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
    const inputText = this.state.inputText.split('');
    inputText.splice(charIndex, 1);
    const updatedText = inputText.join('');
    this.setState({inputText: updatedText});
  }



  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '5px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } 
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
            })
            }
           
          </div>
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        };
      
    }

    
    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      // jsx \\ write html code in js file
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          {
            this.state.persons.length > 0 ? 
            <div>
              <button
                key="switchbtn"
                style={style} 
                onClick={this.switchNameHandler.bind(this, this.state.persons[0].name + '!!', 30, 0)}>Switch First Person</button>
              <button
                key="togglebtn"
                style={style} 
                onClick={this.togglePersonsHandler}> Toggle Persons</button>
            </div> : null
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
              { this.state.inputText.split('').map( (ch, index) => {
                return <CharComponent
                          key={index}
                          letter={ch}
                          clicked={() => this.deleteCharHandler(index)}/>;
              })

              }
            </div>
          </div>
        </div>
      </StyleRoot>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null , 'Hi, I\'m a React App !!!' ))
  }
}

export default Radium(App);
