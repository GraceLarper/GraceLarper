import React, {Component} from 'react'
import {connect} from 'react-redux'

import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import { getProducts } from '../reducers/products'

import Sidebar from './Sidebar'


class AllProducts extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getProducts()
  }

  render(){
    const products = this.props.products;
    console.log(products);
    return(
      <div className="container-fluid">
      <div className="col-xs-2">
       <Sidebar />
       </div>
       <div className="col-xs-10">
        <Grid>
          <Row>
            {products.length && products.map(product => {
              let productImage = `/images/${product.imageUrl}`
              return (
            <Col xs={6} md={4} key={product.id}>
              <Thumbnail src={productImage} alt="242x200">
                <h3>{product.title}</h3>
                <h4>{ '$' + product.price}</h4>
                <hr></hr>
                <p>{product.description}</p>
                <p>
                  <Button bsStyle="primary">Add to Cart</Button>&nbsp;
                </p>

              </Thumbnail>
            </Col>)}
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
    products: state.products
  }
}

export default connect(mapStateToProps, {getProducts})(AllProducts)
