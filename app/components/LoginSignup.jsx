import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Login from './Login'
import WhoAmI from './WhoAmI'

import FieldGroup from 'react-bootstrap/lib/FieldGroup'


class LoginSignup extends Component {
  constructor(props){
    super(props)
  }

 render(props) {
    return (
    <div>
      <form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
          />
      </form>
    </div>

    )}
}
export default connect(({auth}) => ({user: auth}), null)(LoginSignup)
