import React from 'react'
import './Persons.css'

const Persons = (props) => 
{
return(
    <div className="Person">
        <p onClick={props.click}>This is {props.name} from persons component and i am {props.age} years old </p>
        <p>{[props.children]} </p>
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
)
}

export default Persons
