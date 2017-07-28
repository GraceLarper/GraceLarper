import React, {Component} from 'react'
import {connect} from 'react-redux'


class Navbar extends Component {


  render() {
    return (
      <div className="col-xs-12 navbar-fixed-bottom">
        <hr />
        <h3>Alexander Zoitos, Daniel Boufford, Jack Jiang</h3>
        <h4>Fullstack Academy - Grace Hopper Project</h4>
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Navbar)
