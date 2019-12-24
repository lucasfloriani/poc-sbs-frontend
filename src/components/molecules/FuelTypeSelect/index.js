import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FuelTypeActions } from '@store/ducks/fuelType'
import Select from '@atoms/Select'

const FuelTypeSelect = ({ fuelTypes, fuelTypesRequest, ...props }) => {
  useEffect(() => { fuelTypesRequest() }, [fuelTypesRequest])
  return <Select options={fuelTypes} {...props} />
}

FuelTypeSelect.propTypes = {
  fuelTypes: PropTypes.array.isRequired,
  fuelTypesRequest: PropTypes.func.isRequired,
}

const mapStateToProps = ({ fuelType: { fuelTypes } }) => ({ fuelTypes })
const mapDispatchToProps = dispatch => bindActionCreators(FuelTypeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FuelTypeSelect)
