import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Media from 'react-bootstrap/lib/Media'
import Image from 'react-bootstrap/lib/Image'
import { getOrderThunk, getOrderIdThunk, removeItem, checkout } from '../reducers/cart'

class Orders extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.checkoutClick = this.checkoutClick.bind(this)
  }
  componentDidMount() {
    this.props.getOrderIdThunk()
      .then(result => {
        this.props.getOrderThunk(result.order)
      })
  }
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState(nextProps)
    }
  }
  onClick(event) {
    event.preventDefault()
    this.props.removeItem(this.props.cart.order, event.target.value)
  }
  checkoutClick(event) {
    this.props.checkout(this.props.cart.order)
    this.props.history.push('/purchased')
  }
  render(props) {
    let totalPrice = 0
    return (
      <div className="container">
        <h1>Shopping Cart</h1>
        <hr></hr>
        <div className="col-xs-10">
          {this.props.cart.productsForOrder ? this.props.cart.productsForOrder.map(product => {
            totalPrice += product.product.price
            return (
              <Accordion key={product.product.id}>
                <Panel header={product.product.title} eventKey="2">
                  <Media>
                    <Media.Left>
                      <img width={256} height={256} src={`/images/${product.product.imageUrl}`} alt="Image" />
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading></Media.Heading>
                      <h3>{product.product.title}</h3><h4>{product.product.price}</h4><h5>{product.product.stock}</h5>
                      <Button onClick={this.onClick} value={product.product.id} bsStyle="warning">Remove From Cart</Button>&nbsp;
                      <NavLink to={``}><Button bsStyle="link">View Details</Button>&nbsp;</NavLink>
                    </Media.Body>
                  </Media>
                </Panel>
              </Accordion>
            )
          }) : (<h1>Cart is Empty</h1>)}
          <div>
            <h3>{'Your Total is: $' + totalPrice + '.00'}</h3>
            {totalPrice ? <Button onClick={this.checkoutClick} bsStyle="primary">Check Out</Button>: <Button onClick={this.checkoutClick} bsStyle="primary" disabled>Check Out</Button> }
        </div>
        </div>
      </div>
    )
  }
}

// CONTAINER

const mapState = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapState, { getOrderThunk, getOrderIdThunk, removeItem, checkout })(Orders)
