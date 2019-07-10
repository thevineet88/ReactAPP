import React, { useState } from 'react';
import './App.css';
import Persons from './Components/Persons/Persons'

//class App extends Component {
// state =  
// { 
//   persons : [
//     {
//     name : 'Vineet',
//     age : '29'
//     },
//     {
//     name :  'Rakhi',
//     age : '23'
//     },
//     {
//     name :  'Savita',
//     age : '26'
//     }
//   ],
//   otherState : 'Other State' 
// }


// switchHandler = () =>
// {
//   //console.log("was clicked")
//   this.setState({
//     persons : [
//       {
//         name : 'Vineet',
//       age : '29'
//       },
//       { 
//         name :  'Maxx',
//         age : '23'
//       },
//       {
//         name :  'Savita',
//         age : '31'
//       }
//       ] 
//   })
//   console.log(this.state)
// }
  //render() {

  const App = (props) => {
    const [newArr,newSetState] = useState ( 
    {
      newPersons : [
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

    const switchHandler = () =>
    {
  //console.log("was clicked")
  newSetState({
    newPersons : [
      {
        name : 'Vineet',
      age : '35'
      },
      { 
        name :  'Maxx',
        age : '23'
      },
      {
        name :  'Chris',
        age : '40'
      }
      ] 
  })
  console.log(newArr)
}

    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <button onClick={switchHandler}>Switch Name</button>
        <Persons  name={newArr.newPersons[0].name} age={newArr.newPersons[0].age}/>
        <Persons  name={newArr.newPersons[1].name} age={newArr.newPersons[1].age}>My Hobby is Playing Chess </Persons>
        <Persons name={newArr.newPersons[2].name} age={newArr.newPersons[2].age}/>
      </div>
    );
  }
 // }

export default App;
