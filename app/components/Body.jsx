import React, {Component} from 'react'
import {connect} from 'react-redux'

import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from 'react-bootstrap/lib/Carousel'
// import Carousel from 'react-bootstrap/lib/Carousel'

class Body extends Component {


  render() {
    return (
      <div>
        <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/images/axe.jpg"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/images/boot.jpg"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/images/joust.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Body)