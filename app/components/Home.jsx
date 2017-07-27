import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Sidebar from './Sidebar'
import Body from './Body'
import AllProducts from './AllProducts'

class Home extends Component {


  render() {



    return (
      <div>
         <NavigationBar />
         <Body />
         <AllProducts />
        <nav>
          {/*user ? <WhoAmI/> : <Login/>*/}

        </nav>
        <main>
          <Switch>
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

//CONTAINER

export default connect(null, null)(Home)
