import React, {Component} from 'react'
import {connect} from 'react-redux'


class Sidebar extends Component {


  render() {
    return (
      <div>
        <h3>Sidebar</h3>
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Sidebar)
