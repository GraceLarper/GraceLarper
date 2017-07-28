import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Sidebar extends Component {


  render() {
    return (
      <div>
        <h3>Search Items</h3>
        <input type="text" placeholder="..."></input><br />
        <input type="button" value="search"></input>
        <h3>Filter Items</h3>
        <ul><strong>Product Type</strong>
          <Link to=""><li>All</li></Link>
          <Link to="#"><li>Weapons</li></Link>
          <Link to="#"><li>Costumes</li></Link>
        </ul>
        <ul><strong>Price Range</strong>
          <Link to="#"><li>$0.00-$30.00</li></Link>
          <Link to="#"><li>$30.00-$60.00</li></Link>
          <Link to="#"><li>$60.00-$100.00</li></Link>
          <Link to="#"><li>$100.00-$200.00</li></Link>
          <Link to="#"><li>$200.00+</li></Link>
        </ul>
        <ul><strong>Star Rating</strong>
          <Link to="#"><li><img style={{width: 90, height: 20}} src="images/5star.jpg"/>  5 Stars</li></Link>
          <Link to="#"><li><img style={{width: 90, height: 20}} src="images/4star.jpg"/>  4 Stars+</li></Link>
          <Link to="#"><li><img style={{width: 90, height: 20}} src="images/3star.jpg"/>  3 Stars+</li></Link>
          <Link to="#"><li><img style={{width: 90, height: 20}} src="images/2star.jpg"/>  2 Stars+</li></Link>
          <Link to="#"><li><img style={{width: 90, height: 20}} src="images/1star.jpg"/>  1 Stars+</li></Link>
        </ul>

      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Sidebar)
