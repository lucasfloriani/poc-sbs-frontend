import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AdminRoute = ({
  component: Component, isAuthenticated, user, ...rest
}) => (
  <Route
    {...rest}
    render={props => isAuthenticated && user.type === 'admin'
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/' }} />}
  />
)

AdminRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({ isAuthenticated, user })

export default connect(mapStateToProps)(AdminRoute)
