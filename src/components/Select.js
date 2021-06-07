import React from 'react'
import './Select.css'

export class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  selectList = this.props.selectList

  handleChange(e) {
    this.props.onSelActivItemChange({ value: e.target.value })
    this.setState({ value: e.target.value })
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
    return (
      <div>
        <div className="label-sel">{labelButton}</div>
        <select
          value={this.state.value}
          className="sel"
          onChange={(e) => this.handleChange(e)}
        >
          {this.renderOptions()}
        </select>
      </div>
    )
  }
}

export default Select
