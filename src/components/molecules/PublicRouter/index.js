import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import UserTypesURL from '@enums/userTypesURL'

const PublicRouter = ({
  component: Component, isAuthenticated, user, ...rest
}) => (
  <Route
    {...rest}
    render={
      props => isAuthenticated && user.type
        ? <Redirect to={{ pathname: UserTypesURL[user.type] }} />
        : <Component {...props} />
    }
  />
)

PublicRouter.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({ isAuthenticated, user })

export default connect(mapStateToProps)(PublicRouter)
