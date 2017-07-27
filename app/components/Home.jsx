import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Body from './Body'
import AllProducts from './AllProducts'

class Home extends Component {


  render() {
    return (
      <div>
         <NavigationBar />
        <main>
          <Switch>
            <Route exact path = "/" component = { Body } />
            <Route exact path = "/products" component = { AllProducts} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Home)
