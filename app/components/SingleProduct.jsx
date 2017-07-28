import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../reducers/products'

import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'


class SingleProduct extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSingleProduct(this.props.match.params.id)

  }
// {'/images/' + singleProduct.imageUrl}
  render(){
    const singleProduct = this.props.products;
    console.log('signleproduct', singleProduct)

    return singleProduct? (
      <div className="container">
        <div className="col-xs-6">
          <Thumbnail src={'/images/' + singleProduct.imageUrl} alt="242x200">
          </Thumbnail>
        </div>
        <div className="col-xs-6">
          <h3>{singleProduct.title}</h3>
          <h4>{'$' + singleProduct.price}</h4>
          <p>{singleProduct.description}</p>
          <h5>{'Stock:' + singleProduct.quantity}</h5>
          <p>
            <Button bsStyle="primary">Add to Cart</Button>&nbsp;
          </p>
         </div>
        </div>
    ) :
    (
      <div>LOADING</div>
    )

  }
}
function mapStateToProps(state, componentProps) {
  console.log('state', state)
  console.log('componentProps', componentProps)
  return {
    products: state.products[0]
  }
}



export default connect(mapStateToProps, {getSingleProduct})(SingleProduct)
