import React from 'react'
import './Select.css'
import PropTypes from 'prop-types'

export class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  selectList = this.props.selectList

  handleChange(e) {
    this.props.setSelectItemActive(e.target.value, this.props.id)
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

Select.propTypes = {
  id: PropTypes.string.isRequired,
  setSelectItemActive: PropTypes.func.isRequired,
}

export default Select
