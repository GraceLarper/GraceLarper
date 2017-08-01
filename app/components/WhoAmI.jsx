import React from 'react'
import { Link } from 'react-router-dom'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <Link to="/profile"><span className="whoami-user-name">My Profile</span></Link>
    <button className="logout" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
