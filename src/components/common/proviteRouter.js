import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { PropTypes } from 'prop-types'
const PrivateRoute = ({ component: Component, auth,...rest }) => (
    <Route
       {...rest}
        render={
        (props) =>
        (auth=== true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
  // PrivateRoute.PropTypes = {
  //   auth: PropTypes.
  // }
const mapStateToProps = state => ({
    auth: state.loginReducer.auth
})
  export  default  connect(mapStateToProps)(PrivateRoute);