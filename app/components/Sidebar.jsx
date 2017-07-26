import React, {Component} from 'react'
import {connect} from 'react-redux'


class Sidebar extends Component {


  render() {
    return (
      <div>
        <h3>Filter Items By:</h3>
        <ul><strong>Product Type</strong>
          <li>Weapons</li>
          <li>Costumes</li>
        </ul>

        <ul><strong>Price Range</strong>
          <li>$0.00-$30.00</li>
          <li>$30.00-$60.00</li>
        </ul>
        <p>Star Rating</p>

      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Sidebar)
