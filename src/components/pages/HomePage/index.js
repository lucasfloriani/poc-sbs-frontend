import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { usePosition } from 'use-position'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import ScreenLoader from '@molecules/ScreenLoader'
import FilterGasStation from '@organisms/FilterGasStation'
import ListGasStations from '@organisms/ListGasStations'
import MapPins from '@organisms/MapPins'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const HomePage = ({ gasStations, gasStationsRequest, isFetching }) => {
  const { latitude = -26.244383377008926, longitude = -49.384092876981356 } = usePosition()
  useEffect(() => {
    const filterValues = {
      name: '',
      state: '',
      city: '',
      orderType: '',
      paymentType: '',
      fuelType: '',
      minPrice: '',
      maxPrice: '',
      rating: 0,
    }
    gasStationsRequest(filterValues)
  }, [gasStationsRequest])
  if (isFetching) return <ScreenLoader />

  const gasStationsPins = gasStations.map(gasStation => ({
    location: gasStation.geo_location,
    name: gasStation.fantasy_name,
    prices: gasStation.priceFuels,
  }))

  return (
    <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
      <Container align="center">
        <Grid>
          <MapPins latitude={latitude} longitude={longitude} pins={gasStationsPins} />
          <FilterGasStation onSubmit={filterPayload => gasStationsRequest(filterPayload)} />
          <ListGasStations />
        </Grid>
      </Container>
    </FullPageTemplate>
  )
}

HomePage.propTypes = {
  gasStations: PropTypes.array,
  gasStationsRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ gasStation: { gasStations, isFetching } }) => ({ gasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
