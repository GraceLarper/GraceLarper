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



class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
      </div>
    )
  }
}

function mapStateToProps(state, componentProps) {
  return {
    products: state.products[0],
    review: state.reviews,
    auth: state.auth
  }
}



export default connect(mapStateToProps, null)(SingleProduct)
