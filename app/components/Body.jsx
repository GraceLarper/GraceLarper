import React, { Component } from 'react'
import { connect } from 'react-redux'

import Carousel from 'react-bootstrap/lib/Carousel'
import Sidebar from './Sidebar'

class Body extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div>
          <Carousel>
            <Carousel.Item>
              <img style={{ width: 750, height: 750 }} src="/images/crowwbow.jpg" />
              <Carousel.Caption>
                <h3>Omri's Crossbow</h3>
                <p>When it shoots, you better REACT</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ width: 750, height: 750 }} alt="900x500" src="/images/boot.jpg" />
              <Carousel.Caption>
                <h3>Kate's Boots</h3>
                <p>If you're absent 4 times, you're getting the BOOT.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ width: 750, height: 750 }} alt="900x500" src="/images/spear.jpg" />
              <Carousel.Caption>
                <h3>Long Lance</h3>
                <p>Poke people from afar.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

// CONTAINER

export default Body
