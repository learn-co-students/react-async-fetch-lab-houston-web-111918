// create your App component here

import React, { Component} from 'react';
let arr = []

export default class App extends Component {

    render(){
       return
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(res => {
            arr =res
        })
        
      }
}