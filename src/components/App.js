import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
//import SelectContainer from '../containers/SelectContainer'
import Select from './Select'
import ButtonContainer from '../containers/ButtonContainer'
import coursesList from '../utils/courses'
import modulesList from '../utils/modules'
import { requestCreate } from '../utils/requests'
import { requestLoad } from '../utils/requests'
//import { appMode, AppModeContext } from '../components/App-context'

import '../containers/Reset.css'
import './App.css'
import './Сhoice-actions.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handlActivCourseChange = this.handlActivCourseChange.bind(this)
    this.handlActivModuleChange = this.handlActivModuleChange.bind(this)
    this.state = {
      courseActive: '',
      moduleActive: '',
    }
  }

  handlActivCourseChange(value) {
    this.setState({ courseActive: value })
  }

  handlActivModuleChange(value) {
    this.setState({ moduleActive: value })
  }

  render() {
    const msgCourse = this.state.courseActive
    const msgModule = this.state.moduleActive

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Courses</h1>
          <div>
            <p>Выбран курс: {msgCourse.value}</p>
            <p>Выбран модуль: {msgModule.value}</p>
          </div>
          <UserContainer />
        </header>
        <div className="Choice-actions">
          <Select
            selectList={coursesList}
            labelButton={'Выберите курс:'}
            onSelActivItemChange={this.handlActivCourseChange}
          />
          <Select
            selectList={modulesList}
            labelButton={'Выберите модуль:'}
            onSelActivItemChange={this.handlActivModuleChange}
          />
          <ButtonContainer
            n={'Открыть'}
            req={requestLoad[0]}
            labelButton={'Открыть модуль'}
          />
          <ButtonContainer
            n={'Новый модуль'}
            req={requestCreate[0]}
            labelButton={'Создать модуль'}
          />
        </div>
      </div>
    )
  }
}

export default App
