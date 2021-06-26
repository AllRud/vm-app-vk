import React from 'react'
import PropTypes from 'prop-types'
import './User.css'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return (
        <div>
          <p>{error} </p>
          <p>You are not logged in1.</p>
        </div>
      )
    }

    if (isFetching) {
      return <p className="auth">Loading...</p>
    }

    if (name) {
      return (
        <div className="auth">
          <p>Hi, {name}!</p>
          <button className="btn" onClick={this.props.handleLogout}>
            LogOut
          </button>
        </div>
      )
    } else {
      return (
        <div className="auth">
          <p>You are not logged in.</p>
          <button className="btn" onClick={this.props.handleLogin}>
            SignIn
          </button>
        </div>
      )
    }
  }
  render() {
    //console.log('<User/> render')
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
