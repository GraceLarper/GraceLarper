import React, { Component } from 'react'
import { connect } from 'react-redux'

import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Grid from 'react-bootstrap/lib/Grid'
import Well from 'react-bootstrap/lib/Well'
import { getReviewsThunk } from '../reducers/reviews'

class Profile extends Component {

  componentWillMount() {
    this.props.getReviewsThunk(this.props.user.id)
  }

  render() {
    return (
      <div className ="container">
        <div className ="col-xs-1"></div>
        <div className ="col-xs-11">
        <h1>Profile</h1>
        <h4><b>My Name:</b> {this.props.user.name}</h4>
        <h4><b>My Email:</b> {this.props.user.email}</h4>
        <h4><b>My Orders:</b></h4>
        <h4><b>My Reviews:</b></h4>
        {this.props.reviews.map(review => (
            <div key={review.id}>
              <img style={{ height: 25, width: 100 }} src={'/images/' + review.starRating + 'star.jpg'} />
              <Well>{review.comment}</Well>
            </div>)
          )
        }
        </div>
      </div>
    )
    }
}
const mapState = (state) => ({
  user: state.auth,
  reviews: state.reviews.userReviews
})

export default connect(mapState, { getReviewsThunk })(Profile)
