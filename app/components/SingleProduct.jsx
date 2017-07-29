import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../reducers/products'

import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Grid from 'react-bootstrap/lib/Grid'



class SingleProduct extends Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  componentDidMount(){
    this.props.getSingleProduct(this.props.match.params.id)

  }
// {'/images/' + singleProduct.imageUrl}
  render(){
    const singleProduct = this.props.products;
    console.log('signleproduct', singleProduct)

    return singleProduct? (
      <div>
      <div className="container">
        <div className="col-xs-3">
          <Thumbnail style={{width:256, height:256}} src={'/images/' + singleProduct.imageUrl} alt="242x200">
          </Thumbnail>
        </div>
        <div className="col-xs-9">
          <h3>{singleProduct.title}</h3>
          <h4>{'$' + singleProduct.price}</h4>
          <p>{singleProduct.description}</p>
          <h5>{'Stock:' + singleProduct.quantity}</h5>
          <p>
            <Button bsStyle="primary">Add to Cart</Button>&nbsp;
          </p>
         </div>
         </div>
         <div className= "container">
         <div className="col-xs-8">
         <form>
        <FormGroup
          controlId="formControlsTextarea">
          <ControlLabel>Write a review</ControlLabel>
            <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" placeholder="Review me"
            onChange={this.handleChange}/>
          <HelpBlock>Give us your thoughts on this product</HelpBlock>
        </FormGroup>
        </FormGroup>
        <Button bsStyle="primary">Submit</Button>&nbsp;
      </form>
      </div>
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
