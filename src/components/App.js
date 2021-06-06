import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import SelectContainer from '../containers/SelectContainer'
import ButtonContainer from '../containers/ButtonContainer'
import coursesList from '../utils/courses'
import modulesList from '../utils/modules'
import { requestCreate } from '../utils/requests'
import { requestLoad } from '../utils/requests'
import { appMode, AppModeContext } from '../components/App-context'

import '../containers/Reset.css'
import './App.css'
import './Сhoice-actions.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appMode,
    }
    //let msg

    //this.toggleAppMode = () => {
    //  this.setState(state => ({
    //     appMode.appCourse:
    //  }));
    //};
  }

  componentDidUpdate() {
    console.log(appMode.appCourse)
  }

  msg = (<p>Выбран курс {appMode.appCourse}</p>)

  render() {
    return (
      <AppModeContext.Provider value={appMode}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"> Courses</h1>
            {this.msg}
            <UserContainer />
          </header>
          <div className="Choice-actions">
            <SelectContainer
              selectList={coursesList}
              labelButton={'Выберите курс:'}
              id={'coursesList'}
            />
            <SelectContainer
              selectList={modulesList}
              labelButton={'Выберите модуль:'}
              id={'modulesList'}
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
      </AppModeContext.Provider>
    )
  }
}
App.contextType = AppModeContext
export default App
