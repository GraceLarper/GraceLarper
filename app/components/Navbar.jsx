import React, {Component} from 'react'
import {connect} from 'react-redux'


class Navbar extends Component {


  render() {
    return (
      <div>
        <h3>Navbar</h3>
        <button className="btn btn-danger">Don't click me</button>
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Navbar)
