import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import { getProducts } from '../reducers/products'
import { addCart } from '../reducers/cart'

import Sidebar from './Sidebar'

class AllProducts extends Component {
  componentDidMount() {
    this.props.getProducts(this.props.location.search)
  }

  render() {
    const products = this.props.products
    return (
      <div>
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          <Grid>
            <Row >
              {products.length && products.map(product => {
                let productImage = `/images/${product.imageUrl}`
                return (
                  <Col xs={6} md={3} key={product.id}>
                    <Thumbnail style={{ height: 512 }} src={productImage} alt="242x200">
                      <h3>{product.title}</h3>
                      <h4>{'$' + product.price}</h4>
                      <h5> {'Stock: ' + product.quantity}</h5>
                      <hr />
                      <p>
                        <Button bsStyle="primary" name={product.id} onClick={() => this.props.addCart(product)}>Add to Cart</Button>&nbsp;
                    <NavLink to={`/products/${product.id}`}><Button bsStyle="link">View Details</Button>&nbsp;</NavLink>
                      </p>
                    </Thumbnail>
                  </Col>)
              }
              )}
            </Row>
          </Grid>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    user: state.auth,
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: (queryStatus) => {
      dispatch(getProducts(queryStatus))
    },
  }
}

export default connect(mapStateToProps, { getProducts, addCart })(AllProducts)
