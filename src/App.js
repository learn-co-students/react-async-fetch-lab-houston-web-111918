import React, { Component } from 'react';

export default class App extends Component {
    
    state = {
        users: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(users => this.setState({
            users: users.people}))
    }


    render(){
    
   
        return (
            
            <div>

                {this.state.users.map( (person) => person.name)}
            
            </div>
        )
    }
}
