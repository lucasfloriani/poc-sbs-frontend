import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { useLastLocation } from 'react-router-last-location'

const PublicRouter = ({ component: Component, isAuthenticated, ...rest }) => {
  const lastLocation = useLastLocation()

  return (
    <Route
      {...rest}
      render={props => isAuthenticated ? <Redirect to={{ pathname: lastLocation.pathname }} /> : <Component {...props} />}
    />
  )
}

PublicRouter.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ login: { user: { isAuthenticated } } }) => ({ isAuthenticated })

export default connect(mapStateToProps)(PublicRouter)
