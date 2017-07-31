import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/* OB/ET: Consider requiring react-bootstrap just once and importing {Grid, Col} to destructure, look into whether react-bootstrap allows for this */
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'

/* OB/ET: For dev sanity also ***consider*** moving imports for the connect function down by the connect function */
import { getProducts } from '../reducers/products'
import { addCart } from '../reducers/cart'


import Sidebar from './Sidebar'


class AllProducts extends Component {
  /* OB/ET: Frivolous constructor. Your linter will catch this. */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts(this.props.location.search) /* OB/ET: Only loads products once? componentDidMount() only fires once, immediately after your component mounts the first time*/
  }

  /*

  OB/ET: Consider componentWillReceiveProps

  componentWillReceiveProps(prevProps, nextProps) {
   ..........
  }

  */



  render() {
    const products = this.props.products; /* OB/ET: Consider destructuring in render() */
    return (
      <div>
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          <Grid>
            <Row >
              {/* OB/ET: What are we protecting against here? If products is an empty array, it will still map, just over nothing, if you just products.map. If products is undefined, this wouldn't catch it. */}
              {products.length && products.map(product => {
                /* OB/ET: Listen to your newfound linter -- unless this is going to be reassigned, use a const, and also you could just inject this directly into your src */
                let productImage = `/images/${product.imageUrl}`
                return (
                  <Col xs={6} md={3} key={product.id}>
                    <Thumbnail style={{ height: 512 }} src={productImage} alt="242x200">
                      <h3>{product.title}</h3>
                      <h4>{'$' + product.price}</h4>
                      <h5> {'Stock: ' + product.quantity}</h5>
                      <hr />
                      <p>
                        <Button {/* OB/ET: Consider making this readable if multiple attributes on a JSX element */}
                          bsStyle="primary"
                          name={product.id}
                          onClick={() => this.props.addCart(product)}>
                          Add to Cart
                        </Button>
                        &nbsp; {/* OB/ET: ??? */}
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
  /*
  OB/ET:
  Maintaining your entire state in the props of your component?
  Consider only grabbing state that you need.
  This component will re-render for every bit of state in your mapStateToProps...
  */
  return {
    products: state.products,
    user: state.auth,
    cart: state.cart
  }
}

/* OB/ET: Remove lines 99-105, bc destructuring on 109 */
function mapDispatchToProps(dispatch) {
  return {
    getProducts: (queryStatus) => {
      dispatch(getProducts(queryStatus))
    },
  }
}

export default connect(mapStateToProps, { getProducts, addCart })(AllProducts)
