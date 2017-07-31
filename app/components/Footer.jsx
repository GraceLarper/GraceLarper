import React, { Component } from 'react'
import { connect } from 'react-redux'

class Footer extends Component {
  render() {
    return (
      <div style={{ background: "white" }} className="col-xs-12 footer-fixed-bottom">
        <hr />
        <h3>Alexander Zoitos, Daniel Boufford, Jack Jiang</h3>
        <h4>Fullstack Academy - Grace Hopper Project</h4>
      </div>
    )
  }
}

// CONTAINER

export default connect(null, null)(Footer)
