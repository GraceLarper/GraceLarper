import React, {Component} from 'react'
import {connect} from 'react-redux'

import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'


class AllProducts extends Component{

  render(){

    return(

      <div>
        <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/images/corset.jpg" alt="242x200">
        <h3>Corset</h3>
        <p>suck it in</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/images/poison.jpg" alt="242x200">
        <h3>Poison</h3>
        <p>pocket sand</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/images/guantlet.jpg" alt="242x200">
        <h3>Guantlet</h3>
        <p>pow right in the kisser</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
        </div>
    )
  }
}

export default (AllProducts)
