import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export function Button(props) {
  const { requestInfo, isFetching } = props

  function onBtnClick(e) {
    const querry = props.querry
    props.getInfo(querry)
  }

  let msg
  if (isFetching) {
    msg = <p>Loading</p>
  } else {
    msg = <div>{requestInfo}</div>
  }

  const labelButton = props.labelButton
  return (
    <div className="ib">
      <div className="label-btn">{labelButton}</div>
      <button className="btn" onClick={onBtnClick}>
        {props.name}
      </button>
      {msg}
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  querry: PropTypes.string.isRequired,
  getInfo: PropTypes.func,
  getCreate: PropTypes.func,
  requestInfo: PropTypes.any,
  labelButton: PropTypes.string,
}
