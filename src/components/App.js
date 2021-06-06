//import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'
//import { ListItem } from 'react-native-elements'
import UserContainer from '../containers/UserContainer'
import ButtonContainer from '../containers/ButtonContainer'
import coursesList from '../utils/courses'
import modulesList from '../utils/modules'
import { requestCreate } from '../utils/requests'
import { requestLoad } from '../utils/requests'

import '../containers/Reset.css'
import './App.css'
import './Сhoice-actions.css'

export default function ParamsExample() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Courses</h1>
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
          <UserContainer />
        </header>
        <div className="Choice-actions">
          <ul className="topmenu">
            <li className="down">
              <span className="label-sel"> Курс</span>
              <RenderOptions listItems={coursesList} />
            </li>

            <li className="down">
              <span className="label-sel">Модуль:</span>
              <RenderOptions listItems={modulesList} />
            </li>
          </ul>

          <ButtonContainer
            n={'Открыть модуль'}
            req={requestLoad[0]}
            //labelButton={'Открыть модуль'}
          />
          <ButtonContainer
            n={'Новый модуль'}
            req={requestCreate[0]}
            //labelButton={'Создать модуль'}
          />
        </div>
      </div>
    </Router>
  )
}
//let selectList = { coursesList }
//list={ coursesList}

const RenderOptions = ({ listItems }) => (
  <ul className="submenu">
    {listItems.map((item) => (
      <li key={item.toString()}>
        <Link to={item}> {item}</Link>
      </li>
    ))}
  </ul>
)

function Child({ list }) {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams()
  return (
    <div>
      <h3> {id}</h3>
    </div>
  )
}
