import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => {res.json()})
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default App;
