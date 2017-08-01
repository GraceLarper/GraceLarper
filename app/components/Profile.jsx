import React, { Component } from 'react'
import { connect } from 'react-redux'

import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Grid from 'react-bootstrap/lib/Grid'
import Well from 'react-bootstrap/lib/Well'

class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <h4><b>My Email:</b> {this.props.user.email}</h4>
        <h4><b>My Orders:</b></h4>
        <h4><b>My Reviews:</b></h4>
      </div>
    )
    }
}
const mapState = (state) => ({
  user: state.auth
})

export default connect(mapState, {})(Profile)
