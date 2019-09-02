import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as CityActions } from '@store/ducks/city'
import { Select } from 'components'

const CitySelect = ({
  cities, citiesRequest, stateID, ...props
}) => {
  useEffect(() => { stateID && citiesRequest(stateID) }, [stateID])
  return <Select options={cities} {...props} />
}

CitySelect.propTypes = {
  cities: PropTypes.array.isRequired,
}

const mapStateToProps = ({ city: { cities, isFetching } }) => ({ cities, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(CityActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CitySelect)
