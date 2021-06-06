import React from 'react'
import { connect } from 'react-redux'
import { setSelectItemActive } from '../actions/SelectActions'
import { Select } from '../components/Select'
//import modulesList from '../utils/modules'
import { AppModeContext } from '../components/App-context'

class SelectContainer extends React.Component {
  render() {
    //let cont = AppModeContext.AppMode
    const { select, setSelectItemActive } = this.props
    const selectList = this.props.selectList
    const labelButton = this.props.labelButton

    return (
      <Select
        selectItemActive={select.selectItemActive}
        setSelectItemActive={setSelectItemActive}
        selectList={selectList}
        labelButton={labelButton}
        id={this.props.id}
      />
    )
  }
}

SelectContainer.contextType = AppModeContext

const mapStateToProps = (store) => {
  return {
    select: store.select,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectItemActive: (selectItemActive) =>
      dispatch(setSelectItemActive(selectItemActive)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer)
