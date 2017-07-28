import React, {Component} from 'react'
import {connect} from 'react-redux'

import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from 'react-bootstrap/lib/Carousel'
import Sidebar from './Sidebar'

class Body extends Component {


  render() {
    return (
      <div className="container-fluid">

        <div>
          <Carousel>
            <Carousel.Item>
              <img style={{width:750, height:750 }} src="/images/crowwbow.jpg" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{width:750, height:750}} alt="900x500" src="/images/boot.jpg"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{width:750, height:750}} alt="900x500" src="/images/joust.jpg"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Body)
