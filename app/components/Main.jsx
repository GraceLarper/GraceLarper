'use strict'

import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Jokes from './Jokes'
import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      <main>
        <Switch from="">
          <Route path="/jokes" component={Jokes} />
          <Redirect exact from="/" to="/jokes" />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
)

export default ExampleApp