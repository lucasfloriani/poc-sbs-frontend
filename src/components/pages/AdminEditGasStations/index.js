import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import Container from '@atoms/Container'
import UpdateGasStationForm from '@molecules/UpdateGasStationForm'
import ScreenLoader from '@molecules/ScreenLoader'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const AdminEditGasStations = () => {
  const dispatch = useDispatch()
  const { gasStationID } = useParams()

  useEffect(() => {
    dispatch(GasStationActions.getGasStationRequest(gasStationID))
  }, [dispatch, gasStationID])

  const { gasStation, isFetching } = useSelector((store) => ({
    gasStation: store.gasStation.gasStation,
    isFetching: store.gasStation.isFetching,
  }))

  return isFetching
    ? <ScreenLoader />
    : (
      <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
        <Container align="center">
          <UpdateGasStationForm gasStation={gasStation} />
        </Container>
      </FullPageTemplate>
    )
}

export default AdminEditGasStations
