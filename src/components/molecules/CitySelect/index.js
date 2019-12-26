import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as CityActions } from '@store/ducks/city'
import Select from '@atoms/Select'

const CitySelect = ({ stateID, ...props }) => {
  const dispatch = useDispatch()
  useEffect(() => { stateID && dispatch(CityActions.citiesRequest(stateID)) }, [dispatch, stateID])
  const cities = useSelector(store => store.city.cities)

  return <Select options={cities} {...props} />
}

CitySelect.propTypes = {
  stateID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}

export default CitySelect
