import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ login: { user: { isAuthenticated } } }) => ({ isAuthenticated })

export default connect(mapStateToProps)(PrivateRoute)
