import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleProduct } from '../reducers/products'
import { getReviewsForSingleProd, addNewReview } from '../reducers/reviews'

import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Grid from 'react-bootstrap/lib/Grid'
import Well from 'react-bootstrap/lib/Well'



class SingleProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }


  onSubmit(event) {
    console.log(this.props)
    const addNewReview = this.props.addNewReview;
    event.preventDefault();
    const newReview = {
      comment: event.target.comment.value,
      starRating: event.target.rating.value,
      product_id: this.props.match.params.id,
      user_id: this.props.auth.id
    }
    addNewReview(newReview)
    event.target.comment.value = '';
  }
  onSubmitToCart(event){
    


  }
  componentDidMount() {
    this.props.getReviewsForSingleProd(this.props.match.params.id)
    this.props.getSingleProduct(this.props.match.params.id)

  }
  // {'/images/' + singleProduct.imageUrl}
  render() {
    console.log(this.props)
    const singleProduct = this.props.products;
    return singleProduct ? (
      <div>
        <div className="container">
          <div className="col-xs-3">
            <Thumbnail style={{ width: 256, height: 256 }} src={'/images/' + singleProduct.imageUrl} alt="242x200">
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
        <div className="container">
          <h4>Reviews</h4>
          <div className="col-xs-6">
            {this.props.review.map(review => {
              console.log(review);
              return (
                <div key={review.id}>
                  <img style={{ height: 25, width: 100 }} src={'/images/' + review.starRating + 'star.jpg'} />
                  <Well>{review.comment}</Well>
                </div>)
            })}
          </div>
        </div>
        <div className="container">
          <div className="col-xs-8">
            <div>
              {this.renderNewReview()}
            </div>
          </div>
        </div>
      </div>
    ) :
      (
        <div>LOADING</div>
      )
  }

  renderNewReview() {
    return (<form onSubmit={this.onSubmit}>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Write a review</ControlLabel>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" name="comment" placeholder="Review me" />
          <HelpBlock>Give us your thoughts on this product</HelpBlock>
        </FormGroup>
      </FormGroup>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Leave a Star Rating</ControlLabel>
        <FormControl componentClass="select" name="rating" placeholder="select">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </FormControl>
      </FormGroup>
      <Button bsStyle="primary" type="submit">Submit</Button>&nbsp;
      </form>
    )
  }
}
function mapStateToProps(state, componentProps) {
  return {
    products: state.products[0],
    review: state.reviews,
    auth: state.auth
  }
}



export default connect(mapStateToProps, { getSingleProduct, getReviewsForSingleProd, addNewReview })(SingleProduct)
