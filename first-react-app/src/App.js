import React, { Component } from 'react';
import './App.css';
import Persons from './Components/Persons/Persons'
import './Components/Persons/Persons.css'

class App extends Component {
state =  
{ 
  persons : [
    {
      id : 'dawd1',
    name : 'Vineet',
    age : '29'
    },
    {
id : 'awdawd',
    name :  'Rakhi',
    age : '23'
    },
    {
id : 'awdwa',
    name :  'Savita',
    age : '26'
    }
  ],
  otherState : 'Other State' ,
  showPersons : false 
}


switchNameHandler = (name) =>
{
  console.log("was clicked")
  this.setState({
    persons : [
      {
        name : name,
      age : '29'
      },
      { 
        name :  'Maxx',
        age : '23'
      },
      {
        name :  'Savita',
        age : '31'
      }
      ] 
  })
  console.log(this.state)
}

changeNameHandler =(event) => {
  this.setState({
    persons : [
      {
        name : event.target.value,
      age : '29'
      },
      { 
        name :  'Maxx',
        age : '23'
      },
      {
        name :  'Savita',
        age : '31'
      }
      ] 
  })
}

toggleNameHandler = () => 
{
  let togglar = this.state.showPersons
  this.setState({showPersons : !togglar})
}

deletePersonHandler = (personIndex) =>
{
const persons = this.state.persons;
persons.splice(personIndex, 1);
this.setState({persons : persons})
}

render() {
  const style = {
    backgroundColor : 'white',
    font : 'broadway',
    border : '1px solid blue',
    padding : '8px',
    cursor : 'pointer'
  }

    return (  
      <div className="App">
        <h1>Hi I am a React App</h1>
        <button 
        style={style} 
        onClick={this.toggleNameHandler}>Toggle User</button>
         {/* { 
          this.state.showPersons === true  ?
        <div>
        <Persons  name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler} 
        changed={this.changeNameHandler} />
        <Persons  name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this,'Mike')} >My Hobby is Playing Chess </Persons>
        <Persons name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={this.switchNameHandler} />
          </div> : null
          }  */}
          
          {
          this.state.persons.map((person, index) => 
          {
            //this.state.showPersons === true  ?
            
            return ( 
              this.state.showPersons === true  ?
            <div> 
              
            <Persons 
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            //click={person.cic}
            /> 
            </div>  : null )
          } 
          )
          }
      </div>
    );
  }
  }

export default App;
