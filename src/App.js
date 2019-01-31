import React, { Component } from 'react';

export default class App extends Component {
    
    state = {
        users: {
            people:[]
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(users => this.setState({
        users: users}))
    }


    render(){
   
        return (
            
            <div>

                {this.state.users.people.map( (person) => person.name)}
            
            </div>
        )
    }
}
