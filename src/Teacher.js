import React, { Component } from 'react';

//Initializing the state inside the constructor
class Teacher extends Component{
    constructor(props){
        super(props);

        //States
        this.state={
            name : "Indra Chaudhary",
            id : this.props.id
        }
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.state.name}</h1>
                <h2>This is your id {this.state.id}</h2>
            </div>
        )
    }
}
export default Teacher;
