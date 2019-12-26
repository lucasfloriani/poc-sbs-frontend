import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as StateActions } from '@store/ducks/state'
import Select from '@atoms/Select'

const StateSelect = ({ ...props }) => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(StateActions.statesRequest()) }, [dispatch])
  const states = useSelector(store => store.state.states)

  return <Select options={states} {...props} />
}

export default StateSelect
