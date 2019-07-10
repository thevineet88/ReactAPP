import React from 'react'

const Persons = (props) => 
{
return(
    <div>
        <p>This is {props.name} from persons component and i am {props.age} years old </p>
        <p>{[props.children]} </p>
        </div>
)
}

export default Persons
