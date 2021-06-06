import React from 'react'
import PropTypes from 'prop-types'
//import './Select.css'
import { AppModeContext } from '../components/App-context'

export class Select extends React.Component {
  //constructor(props) {
  //  super()
  //const selectItemActive = ''
  // }

  componentDidMount() {
    let itemId = this.props.id
    this.setState((state) => ({
      itemId: itemId,
    }))
  }

  selectList = this.props.selectList

  setSelectItemActive(e) {
    const selectItemActive = e.target.value
    //const item = e.target.id
    console.log(e.target.value, selectItemActive)
    this.props.setSelectItemActive(selectItemActive)
    this.setState((state) => ({
      activeItem: selectItemActive,
    }))
    switch (e.target.id) {
      case 'coursesList':
        this.context.appCourse = selectItemActive
        break
      default:
        this.context.appModule = selectItemActive
        break
    }
  }

  renderOptions() {
    return this.selectList.map((u) => {
      return (
        <option key={u.toString()} value={u}>
          {u}
        </option>
      )
    })
  }

  render() {
    const labelButton = this.props.labelButton
    const id = this.props.id
    return (
      //<AppModeContext.Consumer>
      //  {({ appMode, toggleAppMode }) => (
      <div>
        <div className="label-sel">{labelButton}</div>
        <select
          id={id}
          className="sel"
          onChange={(e) => this.setSelectItemActive(e)}
        >
          {this.renderOptions()}
        </select>
      </div>
      //  )}
      // </AppModeContext.Consumer>
    )
  }
}

Select.contextType = AppModeContext

Select.propTypes = {
  selectItemActive: PropTypes.string.isRequired,
  setSelectItemActive: PropTypes.func.isRequired,
  selectList: PropTypes.array.isRequired,
  labelButton: PropTypes.string,
  id: PropTypes.string.isRequired,
}
