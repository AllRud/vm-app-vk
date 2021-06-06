import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
//import { store } from './store/configureStore'

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> My top photo</h1>
        </header>
        <p className="App-intro">My liked photos</p>
        <p>
          {' '}
          My name: {name} {surname} , age {age}
        </p>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store)
  return {
    user: store.user,
  }
}

export default connect(mapStateToProps)(App)
