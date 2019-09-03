import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserType from '@enums/userType'

const HasPermission = ({
  allowedUserType, children, isAuthenticated, logged, userType,
}) => isAuthenticated !== logged || (allowedUserType.length !== 0 && !allowedUserType.includes(userType))
  ? null
  : children

HasPermission.propTypes = {
  allowedUserType: PropTypes.arrayOf(PropTypes.oneOf(Object.values(UserType))).isRequired,
  children: PropTypes.node.isRequired,
  logged: PropTypes.bool.isRequired,
}

HasPermission.defaultProps = {
  allowedUserType: [],
  logged: false,
}

const mapStateToProps = ({ auth: { user: { type: userType }, isAuthenticated } }) => ({ isAuthenticated, userType })

export default connect(mapStateToProps)(HasPermission)
