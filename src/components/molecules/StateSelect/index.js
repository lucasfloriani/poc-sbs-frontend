import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as StateActions } from '@store/ducks/state'
import { Select } from 'components'

const StateSelect = ({ states, statesRequest, ...props }) => {
  useEffect(() => { statesRequest() }, [])
  return (<Select options={states} {...props} />)
}

StateSelect.propTypes = {
  states: PropTypes.array.isRequired,
}

const mapStateToProps = ({ state: { states, isFetching } }) => ({ states, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(StateActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StateSelect)
