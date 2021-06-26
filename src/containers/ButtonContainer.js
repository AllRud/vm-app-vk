import React from 'react'
import { connect } from 'react-redux'
import { getCreate } from '../actions/ButtonCreateActions'
import { getInfo } from '../actions/ButtonLoadActions'
import { Button } from '../components/Button'

function ButtonContainer(props) {
  const { buttonLoad, buttonCreate, getInfo, getCreate } = props
  let requestInfo1
  let isFetching1
  let getInfo1

  switch (props.n) {
    case 'Открыть':
      requestInfo1 = buttonLoad.requestInfo
      getInfo1 = getInfo
      break

    default:
      requestInfo1 = buttonCreate.requestInfo
      getInfo1 = getCreate
      isFetching1 = buttonCreate.isFetching
      break
  }

  return (
    <Button
      name={props.n}
      getInfo={getInfo1}
      requestInfo={requestInfo1}
      querry={props.req}
      isFetching={isFetching1}
      labelButton={props.labelButton}
    />
  )
}
const mapStateToProps = (store) => {
  console.log('Cont button', store.buttonLoad)
  return {
    buttonLoad: store.buttonLoad,
    buttonCreate: store.buttonCreate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: (create) => dispatch(getInfo(create)),
    getCreate: (create) => dispatch(getCreate(create)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer)
