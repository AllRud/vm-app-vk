import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RichTextEditor, {
  getTextAlignClassName,
  getTextAlignStyles,
  getTextAlignBlockMetadata,
} from 'react-rte'

export default class MyStatefulEditor extends Component {
  constructor(props) {
    super(props)
    this.textChange = this.textChange.bind(this)
  }

  static propTypes = {
    onChange: PropTypes.func,
  }

  state = {
    value: RichTextEditor.createEmptyValue(),
  }

  textChange(e) {
    this.props.onHandlRtlTextChange({ e })
  }

  onChange = (value) => {
    this.setState({ value })
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html', { blockStyleFn: getTextAlignStyles })
      )
    }

    this.textChange(value.toString('html'))
  }

  render() {
    return (
      <RichTextEditor
        blockStyleFn={getTextAlignClassName}
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  }
}
