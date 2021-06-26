import React from 'react'
import { connect } from 'react-redux'
import { setSelectItemActive } from '../actions/SelectActions'
import { Select } from '../components/Select'

class SelectContainer extends React.Component {
  render() {
    const selectList = this.props.selectList
    const labelButton = this.props.labelButton
    const setSelectItemActive = this.props.setSelectItemActive

    return (
      <Select
        selectList={selectList}
        labelButton={labelButton}
        setSelectItemActive={setSelectItemActive}
        id={this.props.idSelect}
      />
    )
  }
}

const mapStateToProps = (store) => {
  return {
    select: store.select,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectItemActive: (selectItemActive, id) =>
      dispatch(setSelectItemActive(selectItemActive, id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer)
