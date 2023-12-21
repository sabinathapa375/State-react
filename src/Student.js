import React, { Component } from 'react';

//Initializing state directly inside the class
class Student extends Component{
    state={
        name : "Sabina",
        id : this.props.id
    }

render(){
    return(
        <div>
            <h1>Hello {this.state.name} </h1>
            <h2>Your id is {this.state.id}</h2>
        </div>
    )
}
}
export default Student;
