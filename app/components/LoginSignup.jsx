import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Login from './Login'
import WhoAmI from './WhoAmI'
import { signup } from 'APP/app/reducers/auth'

class LoginSignup extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault()
    const userInfo = {
      name: event.target.name.value,
      email: event.target.username.value,
      password: event.target.password.value
    }
    this.props.signup(userInfo)
    event.target.name.value = ''
    event.target.username.value = ''
    event.target.password.value = ''
  }

  render(props) {
    return (
      <div className="container">
        <div className="col-xs-4">
          <h3>Register</h3>
          <form onSubmit={this.onSubmit}>
            <input name="name" placeholder="name" />
            <input name="username" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <input type="submit" value="Register" />
          </form>
          <hr></hr>
          <div>
            <h3>Login</h3>
            <Login />
          </div>

        </div>

      </div>

    )
  }
}
export default connect(({ auth }) => ({ user: auth }), { signup })(LoginSignup)
