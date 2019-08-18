import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserType from '@enums/userType'

const HasPermission = ({
  allowedUserType, children, isAuthenticated, logged, userType,
}) => {
  if (isAuthenticated !== logged || (allowedUserType.length !== 0 && !allowedUserType.includes(userType))) {
    return null
  }
  return children
}

HasPermission.propTypes = {
  allowedUserType: PropTypes.arrayOf(PropTypes.oneOf(Object.values(UserType))).isRequired,
  children: PropTypes.node.isRequired,
  logged: PropTypes.bool.isRequired,
}

HasPermission.defaultProps = {
  logged: false,
  allowedUserType: [],
}

const mapStateToProps = ({ auth: { user: { type: userType }, isAuthenticated } }) => ({ isAuthenticated, userType })

export default connect(mapStateToProps)(HasPermission)
