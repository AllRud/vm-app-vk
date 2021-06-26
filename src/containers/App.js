import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UserContainer from './UserContainer'
import SelectContainer from '../containers/SelectContainer'
import coursesList from '../utils/courses'
import modulesList from '../utils/modules'
import { connect } from 'react-redux'
import { store } from '../store/configureStore'

import './App.css'

import  WriterRte from '../components/Writer'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <Link to="/home">Courses</Link>
            </h1>
            <div>
              <p>Выбран курс: {store.getState().select.selectCourseActive}</p>
              <p>Выбран модуль: {store.getState().select.selectModuleActive}</p>
            </div>
            <UserContainer />
          </header>
          <div className="Choice-actions">
            <SelectContainer
              selectList={coursesList}
              labelButton={'Выберите курс:'}
              idSelect={'course'}
            />
            <SelectContainer
              selectList={modulesList}
              labelButton={'Выберите модуль:'}
              idSelect={'module'}
            />

            <ul className="topmenu">
              <li className="down">
                <Link to="/writer">Новый модуль</Link>
              </li>

              <li className="down">
                <Link to="/loader">Загрузить</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/writer">
              <WriterRte />

            </Route>
            <Route path="/loader">
              <Loader />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

function Home() {
  return <div></div>
}

function Loader() {
  return (
    <div>
      <h2>Loader</h2>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    select: store.select,
  }
}

export default connect(mapStateToProps)(App)
