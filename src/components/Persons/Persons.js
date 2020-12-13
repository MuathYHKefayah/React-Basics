import React from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'; 

const persons = (props) => props.persons.map((person, index) => {
    return <ErrorBoundary key={person.id}>
              <Person
                name={person.name} 
                age={person.age}
                click={() => props.switched(person.name+'!', person.age + 5, index)}
                changed={(event) => props.changed(event, person.id)}
                deleted={() => props.deleted(index)}
              />
            </ErrorBoundary> 
            
  });


export default persons;