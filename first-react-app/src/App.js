import React, { Component } from 'react';
import './App.css';
import Persons from './Components/Persons/Persons'

class App extends Component {
state =  { 
  persons : [
  {
    name : 'Vineet',
  age : '29'
  },
  {
    name :  'Rakhi',
    age : '23'
  },
  {
    name :  'Savita',
    age : '26'
  }
  ]  
}

switchHandler = () =>
{
  //console.log("was clicked")
  this.setState({
    persons : [
      {
        name : 'Vineet',
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
  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <button onClick={this.switchHandler}>Switch Name</button>
        <Persons  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Persons  name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is Playing Chess </Persons>
        <Persons name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
